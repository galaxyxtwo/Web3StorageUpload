// App.js
import React, { useState } from 'react';
import DragAndDrop from './DragAndDrop';
import { getStorageClient } from './Web3Client';
import './styles.css';

function App() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('Not started');
  const [cids, setCids] = useState([]);

  async function uploadFile() {
    setUploadStatus('Uploading...');
    const client = getStorageClient();
    const cid = await client.put([file]);
    console.log('Uploaded:', cid);
    setUploadStatus('Uploaded');
    setCids([...cids, cid]);
  }

  return (
    <div className="App">
      <DragAndDrop setFile={setFile} />
      {file && (
        <div className="file-info">
          <p>Selected file: {file.name}</p>
          <div className={`status-box ${uploadStatus === 'Uploaded' ? 'uploaded' : 'not-uploaded'}`} />
        </div>
      )}
      <button className="upload-button" onClick={uploadFile}>
        Upload to IPFS
      </button>
      <ul className="cid-list">
        {cids.map((cid, index) => (
          <li key={index}>
            <a href={`https://dweb.link/ipfs/${cid}`} target="_blank" rel="noopener noreferrer">
              {cid}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
