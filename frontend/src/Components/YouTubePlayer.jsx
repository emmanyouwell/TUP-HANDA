import YouTube from "react-youtube";


const YouTubePlayer = ({videoId, className, iframeClass }) => {
  // Once the YouTube package (react-youtube) has loaded
  // tell the thumbnail it is no longer needed.
  // Play the video.
  const _onReady = (event) => {
    // setHasLoaded(true);
    event.target.playVideo();
  };

  return (
    <YouTube
      videoId={videoId}
      onReady={_onReady}
      className={className}
      iframeClassName={iframeClass}
    />
  );
};

export default YouTubePlayer;
