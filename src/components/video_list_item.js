import React from "react";
const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    //TODO:CALLBACK FONKSİYONU İLE BU İTEMİN VİDEO OBJESİNİ YUKARI, PARENTA GÖNDERDİK.
    //(whenever i got clicked, call onVideoSelect function with the video i was passed as an argumant)
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};
export default VideoListItem;
