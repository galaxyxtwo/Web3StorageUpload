// DragAndDrop.js
import React from 'react';

export default function DragAndDrop({ setFile }) {
  const onDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div onDrop={onDrop} onDragOver={onDragOver} style={{ border: '2px dashed black', height: '200px', width: '200px' }}>
      Drop file here
    </div>
  );
}

