import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyDbTJRPJour4TT8D5d1TiDfi22UT16kly4";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            // 키와 변수명이 같으면 이렇게 간단하게 표현할 수 있습니다
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })
    }

    render(){
        // 함수의 호출 시기를 조절하는 lodash 함수
        // 너무 자주 검색이 되지 않도록 합니다.
        // 구글 검색엔진과 비슷하게 검색어 입력후 조금 기다려야 검색 리스트를 자동으로
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
// 컴포넌트를 페이지에 보여주기
ReactDOM.render(<App />, document.getElementById('root'));