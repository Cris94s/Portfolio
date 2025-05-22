// VideoPage.js
import React from "react";

function VideoPage() {
  return (
    <div className="video-page">
      <h2>Guarda il video del progetto Tic Tac Toe</h2>
      <video controls width="100%">
        <source src="/videos/video1.mp4" type="video/mp4" />
        Il tuo browser non supporta il video.
      </video>
    </div>
  );
}

export default VideoPage;
