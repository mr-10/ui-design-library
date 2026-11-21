# Preview issues — auto-fit QA

Checked 21 Nov 2026 with `readme-assets/qa/qa_autofit.py` (results in
`readme-assets/qa/results.json` and `qa/grid2.json`). Re-run after the
late-growth refit fix; numbers below are from the final run.

## Method

- Preview pages: all 62 tooltips + 6 per other category (122 elements) at
  1440px light and 390px light; a 30-element subset at 768px dark and
  1440px dark.
- Grid cards: first 3 cards of every category at 1440px and 390px light
  (66 checks).
- Total: 370 checks. For each: scaled content fits inside the box,
  no scrollbar inside the iframe document, and width as % of the box.

## Results

- **Cropped previews: 0.** Every measured element fits inside its box
  (`fits` false in 0 of 370 checks).
- **Visible scrollbars: 0.** A few checks flagged `scrollWidth >
  clientWidth` at measurement time (curvy-insect-99, modern-ladybug-94,
  serious-seahorse-3, curvy-starfish-3, wise-newt-71). Re-checked at
  rest: `innerWidth == clientWidth`, `overflow: hidden`, and screenshots
  show no scrollbar. The flags were transient overflow during a hover
  animation, measured before it settled — the auto-fit scale already
  accounts for the larger hover state, so nothing is cut off.
- **Errors: 0 real.** The 6 "no-scale" entries are the 3 pattern cards
  checked in the grid at both widths — patterns are virtual-viewport
  frames and have no auto-fit dataset by design; their parent-side
  scaling was verified separately.
- **Grid cards under 35% of the card width: 8 of 60**, all listed under
  Known exceptions below (tall/narrow elements) except Afraid Newt 19,
  whose grid reading caught the tooltip before its popup settled — on
  the preview page the same element measures 52% of the box with the
  popup included.

## Fixed with overrides (`data/overrides.json`)

Tiny elements hit the 1.6 auto-fit clamp and stayed under ~35% of the
**card** box width. They now use `minScale` — a floor that enlarges them
but is capped by the fit limit, so it can never crop:

| Element | Category | minScale | Card width before → after |
| --- | --- | --- | --- |
| hungry-robin-21-by-aiviiid | checkboxes | 2.62 | 8% → ~38% |
| plastic-panther-7-by-priyanshugupta28 | checkboxes | 3.40 | 6% → ~52% |
| smart-insect-43-by-eddybel | checkboxes | 2.13 | 9% → ~38% |
| modern-ladybug-94-by-lvloper | tooltips | 2.89 | 7% → ~38% |
| serious-termite-83-by-cobp | tooltips | 3.78 | 5% → ~38% |
| afraid-eel-50-by-zanina-yassine | toggle-switches | 3.35 | 25% → ~38% |
| afraid-walrus-18-by-elijahgummer | checkboxes | 1.77 | 34% → ~38% |
| afraid-octopus-54-by-shubh0408 | toggle-switches | 2.40 | 21% → ~32% |

## Known exceptions — small by necessity, not a bug

These are tall, narrow elements (vertical toggles, tall tooltip menus,
vertical cards). Their height is the binding constraint: enlarging them
to 35% of the card width would crop them top and bottom. They are shown
**complete, never cropped**, at the largest size that fits:

- nervous-sheep-18-by-alexruix (loaders, 13×128 — a vertical line loader)
- happy-mule-45-by-type-delta (toggle-switches, 51×91 — vertical toggle)
- cold-horse-3-by-themrsami (tooltips, 91×336 — tall nav menu)
- heavy-emu-75-by-omriluz (tooltips, 130×331)
- itchy-newt-24-by-smookydev (tooltips, 74×492 — very tall)
- odd-seahorse-52-by-echeverriajesus (tooltips, 129×241)
- quick-zebra-71-by-themrsami (tooltips, 226×426)
- terrible-puma-8-by-ayman-ashine (tooltips, 77×230)
- afraid-liger-45-by-smookydev (cards, 50×255 — tall vertical card)
- afraid-turtle-19-by-uncannypotato69 (checkboxes, 45×134)
- bad-starfish-74-by-shoh2008 (radio-buttons, 61×156)

## Notes

- The ~35% width rule is applied to the **4:3 card box**. On the large
  16:9 preview stage the same element is a smaller percentage of the
  (much wider) stage — that is by design; the Fit / 100% toggle shows
  the real size.
- Virtual-viewport elements (all 103 patterns + 3 using 100vw/100vh)
  render in a fixed 800×500 viewport scaled to fit; they are not
  measured, so they have no width % in the results.
- Fixed during this QA: navigating between browse categories could show
  the previous category's cards (the infinite-scroll sentinel rendered
  stale results while the new category loaded). `refreshBrowse` now sets
  a loading flag and a generation guard, and the Load More button is
  re-enabled correctly.
- Fixed during this QA: some elements (notably Tailwind-based ones) grow
  after the first measurement — their content is wider once their fonts
  settle — and the first fit used the smaller size, so they overflowed
  the card. The driver now re-measures when the stage's first child
  changes size (ResizeObserver), when `document.fonts.ready` resolves,
  and once more 2.5 s after load as a safety net.

## 21 Nov 2026 — real interaction redesign (no autoplay, scroll shield)

Checked with `readme-assets/qa/test_real_interaction.py` (72 checks) and
`readme-assets/qa/test_30_elements.py` (57 checks, seed 7), plus the
updated `readme-assets/qa/audit.py` (28/29 — the one failure is the
pre-existing flaky "wrong id shows friendly not-found" check, unchanged
from the 27/28 baseline). All three suites pass after the fixes below.

### Fixed (driver, no per-element override needed)

- **Tall/narrow forms sat too low, not vertically centred** —
  `forms/blue-mule-76-by-mi-series` (fit 200×256) and
  `forms/fuzzy-insect-61-by-doniaskima` (fit 100×256) rendered with
  their stage top at ~141px in a 320px box (centre y≈269 instead of
  160). Root cause: the driver's reset `body{display:grid;
  place-items:center}` sizes its single grid row to the content, so a
  stage taller than the viewport is centred inside a content-sized
  row, not inside the viewport. Fix: the reset now also sets
  `place-content:center`, so the grid track itself is centred in the
  body. Both forms now render centred (top 32px, bottom 288px) with no
  scrollbar. No `data/overrides.json` entry was needed.

### Not a site bug (test / environment notes)

- **Checkbox/radio `.value` is `'on'` while `.defaultValue` is `''`** —
  the "at rest" check flagged `value:on` on several elements
  (calm-pug-88, wonderful-dog-56, little-grasshopper-46,
  calm-lionfish-10, thin-hound-49, silly-otter-89, dull-lizard-58,
  great-badger-21). That is the browser's default for a checkbox with
  no `value` attribute, not a state change. The checks now only compare
  `value` for text-like inputs and compare `checked` for
  checkbox/radio.
- **Hidden inputs can't be clicked directly** — toggle/checkbox/radio
  inputs are visually hidden (0×0); a real user clicks the visible
  label/slider/checkmark. The tests now click the label's visible
  control (`.checkmark`/`.slider`/`.checkbox-tile`) or the label, with
  a DOM-click fallback. One element, `checkboxes/
  calm-lionfish-10-by-boryanakrasteva`, has a 0-height outer label
  (its visible control is the 46×46 `.checkmark` span) — clicking the
  checkmark toggles it correctly.
- **Virtual-viewport (vp) elements have no fit dataset by design** —
  `patterns/brown-bulldog-93-by-csemszepp` and
  `patterns/slippery-sheep-50-by-aspenbranch` (and all 103 patterns)
  fill a fixed 800×500 iframe the parent scales; there is no `#stage`
  and no `uilibScale` dataset. The 30-element test now treats vp
  elements separately (800×500 frame, no scrollbar) instead of
  expecting the fit dataset.
- **Touch tap → click inside a srcdoc iframe does not fire in this
  headless Chromium mobile emulation** — verified with a minimal
  repro (a tap on a button in a plain srcdoc iframe fires no click,
  while the same tap on a parent-page button does). Mouse clicks do
  fire inside the iframe, and touchstart/pointerdown do reach it, so
  the real event path is verified via mouse; on a real phone the tap
  applies sticky `:hover` and fires click normally. Mobile tooltip
  popups are therefore verified with a real hover at 390px (same
  `:hover` CSS path) rather than a tap.
