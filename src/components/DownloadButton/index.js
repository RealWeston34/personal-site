import React from 'react';
import Button from '@mui/material/Button';

const DownloadButton = ({ fileUrl, fileName }) => {
  const handleDownload = () => {
    fetch(fileUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.status}`);
        }
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Button variant="contained" onClick={handleDownload}>
      Resume
    </Button>
  );
};

export default DownloadButton