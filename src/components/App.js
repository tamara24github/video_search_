import React from "react";
import SearchBar from "./SearchBar";
import YouTube from "../apis/YouTube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {listOfVideos: [], selectedVideo: null};

  onTermSubmit =  async (searchTerm) =>{
    const response = await YouTube.get("/search",{
      params: {
        q: searchTerm
      }

    });
    this.setState({
      listOfVideos: response.data.items,
      selectedVideo: response.data.items[0]
    });

  };
componentDidMount(){
  this.onTermSubmit("lord of the rings movie");
}
  onSelectedVideo = (video) =>{
    this.setState({selectedVideo: video });
  };

  render(){
    return(
      <div className = "ui container">
      <SearchBar onTerm = {this.onTermSubmit}/>
      <div className = "ui grid">
        <div className = "ui row">
        <div className = "eleven wide column">
          <VideoDetail currentVideo = {this.state.selectedVideo}/>
        </div>
          <div className = "five wide column">
            <VideoList videos = {this.state.listOfVideos} onVideoSelect = {this.onSelectedVideo}/>
          </div>
        </div>
      </div>
      </div>

    );
  }
}



export default App;
