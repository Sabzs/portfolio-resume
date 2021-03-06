import React from 'react'

function DownloadResume() {

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `Sabo-J-Resume.pdf`;
    link.href = "/Sabo-J-Resume.pdf";
    link.click();
  };

  return (
    <div className="resume-download" >
      <button className="resume-download__CV-btn" onClick={onDownload} download>Download Resume</button>
    </div>
  )
}

export default DownloadResume;
