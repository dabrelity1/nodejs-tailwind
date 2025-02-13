import React from 'react';
import { AudioPlayer } from '../components/AudioPlayer';

export default function Player() {
  const sampleAudioUrl = 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav';

  return (
    <div className="player">
      <h1>Audio Player</h1>
      <AudioPlayer audioUrl={sampleAudioUrl} />
    </div>
  );
}