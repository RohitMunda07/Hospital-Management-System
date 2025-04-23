// utils/appwriteHelpers.js

import { storage, IDGen } from '../Appwrite/confg';

export const uploadReceipt = async (file) => {
  const response = await storage.createFile(
    'YOUR_BUCKET_ID', // Replace with your actual Appwrite storage bucket ID
    IDGen.unique(),
    file
  );

  return response.$id; // You'll store this in your form document
};
