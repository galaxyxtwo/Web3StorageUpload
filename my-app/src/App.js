// App.js
import React, { useState } from 'react';
import DragAndDrop from './DragAndDrop';
import { getStorageClient } from './Web3Client';

function App() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('Not started');

  async function uploadFile() {
    setUploadStatus('Uploading...');
    const client = getStorageClient();
    const cid = await client.put([file]);
    console.log('Uploaded:', cid);
    setUploadStatus('Uploaded');
  }

  return (
    <div className="App">
      <DragAndDrop setFile={setFile} />
      {file && <p>Selected file: {file.name}</p>}
      <div style={{height: '20px', width: '20px', backgroundColor: uploadStatus === 'Uploaded' ? 'green' : 'red' }} />
      <button onClick={uploadFile}>Upload to IPFS</button>
    </div>
  );
}

export default App;

