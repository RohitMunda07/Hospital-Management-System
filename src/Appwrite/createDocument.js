// utils/appwriteHelpers.js

import { databases, IDGen } from '../Appwrite/confg';

export const createClaimDocument = async (data) => {
  return await databases.createDocument(
    'medcard_system',     // Database ID
    'claims',             // Collection ID
    IDGen.unique(),
    data
  );
};
