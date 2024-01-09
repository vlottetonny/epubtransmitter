import React, { ChangeEvent, useState } from 'react';

interface FileUploadProps {
  onFileUpload: (file: File, connectionCode: string) => void;
  connectionCode: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload, connectionCode }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selected = files[0];
      if (selected.name.endsWith('.epub')) {
        setSelectedFile(selected);
      } else {
        console.error('Invalid file type. Please upload an .epub file.');
      }
    }
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('code', connectionCode);

      console.log('Request body:', formData);

      try {
        const response = await fetch('http://localhost:8000/epub/send', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('File sent successfully.');
          onFileUpload(selectedFile, connectionCode);
        } else {
          console.error('Error sending file:', response.statusText);
        }
      } catch (error) {
        console.error('Error sending file:', error);
      }
    } else {
      console.error('No file selected.');
    }
  };

  return (
    <div>
      <input type="file" accept=".epub" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <button onClick={handleFileUpload}>Upload File</button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;