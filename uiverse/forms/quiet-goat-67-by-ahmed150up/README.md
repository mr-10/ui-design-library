# Quiet Goat 67

A form UI element from Uiverse.io by ahmed150up.

Source: https://uiverse.io/ahmed150up/quiet-goat-67

Author: ahmed150up

License: MIT — see [UIVERSE-LICENSE.md](../../UIVERSE-LICENSE.md)

Tags: form, spotify, music

Colors: #1db954, #282828, #4f4f4f, #b3b3b3, #fff

Fonts: See styles.css

Spacing and radius: 2px, 50%, 8px

## Source Code

### index.html

```html
<div class="audio-player">
  <div class="album-cover"></div>
  <div class="player-controls">
    <div class="song-info">
      <div class="song-title">Song Title</div>
      <p class="artist">Artist</p>
    </div>
    <div class="progress-bar">
      <div class="progress"></div>
    </div>
    <div class="buttons">
      <button class="play-btn"><svg viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style="color: white"> <path fill="white" d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path> </svg></button>
      <button class="pause-btn"><svg viewBox="0 0 16 16" class="bi bi-pause-fill" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style="color: white"> <path fill="white" d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path> </svg></button>
    </div>
  </div>
</div>
```

### styles.css

```css
/* From Uiverse.io by ahmed150up - Tags: form, spotify, music */
.audio-player {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 80px;
  background-color: #282828;
  border-radius: 8px;
  padding: 8px;
  box-sizing: border-box;
}

.album-cover {
  width: 64px;
  height: 64px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 12px;
}

.player-controls {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.song-info {
  margin-bottom: 4px;
}

.song-title {
  font-size: 16px;
  color: #fff;
  margin: 0;
}

.artist {
  font-size: 12px;
  color: #b3b3b3;
  margin: 0;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background-color: #4f4f4f;
  border-radius: 2px;
  overflow: hidden;
}

.progress {
  width: 50%;
  height: 100%;
  background-color: #1db954;
  transform-origin: left;
  animation: progress-animation 10s linear infinite;
}

.buttons {
  display: flex;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
}

.play-btn,
.pause-btn {
  font-size: 16px;
  color: #fff;
  margin-right: 8px;
  transition: transform 0.2s ease-in-out;
}

.play-btn:hover,
.pause-btn:hover {
  transform: scale(1.2);
}

@keyframes progress-animation {
  0% {
    transform: scaleX(0);
  }

  100% {
    transform: scaleX(1);
  }
}
```
