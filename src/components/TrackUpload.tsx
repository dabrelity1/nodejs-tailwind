import React, { useRef, useState } from 'react';
import { supabase } from '../app/supabase';

export function TrackUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = async (files: FileList) => {
    const file = files[0];
    if (file) {
      setUploading(true);
      const { data, error } = await supabase.storage.from('audio').upload(file.name, file);
      if (error) {
        console.error('Upload failed:', error);
      } else {
        console.log('File uploaded:', data);
      }
      setUploading(false);
    }
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        accept="audio/*"
        onChange={(e) => e.target.files && handleFileSelect(e.target.files)}
      />
      <button onClick={() => fileInputRef.current?.click()}>Upload Track</button>
      {uploading && <p>Uploading...</p>}
    </div>
  );
}