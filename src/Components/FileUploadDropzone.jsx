import React from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploadDropzone = ({ onFileAccepted }) => {
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
        accept: {
            'text/csv': ['.csv'],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
            'application/vnd.ms-excel': ['.xls'],
        },
        maxFiles: 1,
        onDrop: (acceptedFiles) => {
            if (acceptedFiles.length > 0) {
                const file = acceptedFiles[0];
                console.log("Accepted file:", file);
                onFileAccepted(file); // pass file to parent
            }
        },
    });

    return (
        <div
            {...getRootProps()}
            className={`border-2 border-dashed p-8 rounded-xl text-center transition-colors duration-300 ${
                isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <p className="text-blue-700 font-semibold">Drop the file here ...</p>
            ) : (
                <p className="text-gray-500">
                    Drag & drop an <strong>Excel</strong> or <strong>CSV</strong> file here, or click to select one
                </p>
            )}
        </div>
    );
};

export default FileUploadDropzone;
