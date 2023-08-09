// Web3Client.js
import { Web3Storage } from 'web3.storage';

export function getStorageClient() {
  const token = 'apiKey';
  return new Web3Storage({ token });
}
