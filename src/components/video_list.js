'use strict';

import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  //take the prop from App, pass it to videoListItem
  //onVideoSelect is a property we want to pass to our child item. we get it from selectedVideo property of the initial .state of index.js parent class constructor.
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
      onVideoSelect = {props.onVideoSelect}
      key={video.etag}
      video={video} />
    );
  });
  //we are inhereting props from our parent app (as a return value from the fetch that is called) so we can pass it through to this component
  //we could console.log(props)

  //IMPORTANT: since this is a FUNCTIONAL component, not a class based component, props is an argument. if it were a class based component, we could use this.props and have it readily available to us.
  //we are passing an array of items to React and it's going to try to render all the items inside of the ul
  return (
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  );
};

export default VideoList;
