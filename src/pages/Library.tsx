import React from 'react';
import { TrackUpload } from '../components/TrackUpload';

export default function Library() {
  return (
    <div className="library">
      <h1>Your Library</h1>
      <TrackUpload />
    </div>
  );
}