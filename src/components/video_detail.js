'use strict';

import React from 'react';

//can just be a functional component and have props passed down from the parent component. Ie - index is already handling the fetched props, so is the video_list_item
const VideoDetail = ({video}) => {

  if(!video) {
    return <div>Loading Video...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;
