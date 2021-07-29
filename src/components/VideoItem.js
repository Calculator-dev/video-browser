
import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <Grid item xs={12}>
            <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer", width: 450 }} onClick={() => onVideoSelect(video)} >
                <img style={{ marginRight: "20px", maxWidth: 200, maxHeight: 100 }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                <Typography variant="subtitle1">
                    <p>{video.snippet.title}</p>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default VideoItem;