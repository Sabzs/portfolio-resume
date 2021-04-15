import React from 'react'

function DownloadResume() {

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `SABO-J-RESUME.pdf`;
    link.href = "/SABO-J-RESUME.pdf";
    link.click();
  };

  return (
    <div className="resume-download" >
      <button className="resume-download__CV-btn" onClick={onDownload} download>Download Resume</button>
    </div>
  )
}

export default DownloadResume;
