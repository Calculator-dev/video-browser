import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

import youtube from "./api/youtube";

const App = () => {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });

  async function handleSubmit(keyword) {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        q: keyword,
      }
    });

    setVideos(videos);
    setSelectedVideo(videos[0]);
  }

  if (!selectedVideo.id.videoId) {
    handleSubmit("cute animals");
  }


  return (
    <Grid style={{ justifyContent: "center" }} container >
      <Grid item xs={11}>
        <Grid container spacing={10} >
          <Grid item xs={12} style={{ padding: "40px 15px 0 40px" }}>
            <SearchBar onSubmit={handleSubmit} video={selectedVideo} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} video={selectedVideo} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}


export default App;