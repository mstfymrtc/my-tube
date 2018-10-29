import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import _ from "lodash";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyC6kQfDUgezPogZiUjfiqkALHJa1EX-JoM";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("yorekok");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        {/* <SearchBar onSearchTermChange={term => this.videoSearch(term)} /> */}
        <SearchBar onSearchTermChange={videoSearch} />

        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          //TODO:CALLBACK FONKSİYONUNU CHİLDA GÖNDERMEK. Dönen veri selectedVideo olacak
          //ve state i bu veriyle güncelelyeceğiz.
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
