import React, { useState } from 'react';
import FileUploadDropzone from '../Components/FileUploadDropzone';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Button } from '../Components/index';
import { useNavigate } from 'react-router-dom';

const DumpData = () => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const navigate = useNavigate();
    const handleFileAccepted = (file) => {
        setUploadedFile(file);

        // TODO: Send the file to Appwrite here
        // Example using FormData or FileReader depending on how you want to handle it
    };

    return (
        <div className="max-w-xl mx-auto mt-10 flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Upload Employee Data</h2>
            <FileUploadDropzone onFileAccepted={handleFileAccepted} />

            {uploadedFile && (
                <div className="mt-4 text-green-600">
                    File selected: <strong>{uploadedFile.name}</strong>
                </div>
            )}

            <div className='mt-5'>
                <Button
                    className='rounded-full '
                    onClick={() => navigate('/admin')}>
                    <ArrowCircleLeftIcon />
                </Button>
            </div>
        </div>
    );
};

export default DumpData;
