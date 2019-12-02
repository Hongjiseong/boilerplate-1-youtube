import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    // 함수형에서 클래스형으로 변환하는 경우에는 props 를 this.props 로 바꾸어야 합니다.
    const videoItems = props.videos.map((video) => {
        // 리액트에서는 키가 필요합니다.
        // 리스트에서 어떤 데이터가 변했는지 알아내고 해당 요소만 다시 렌더링할 필요가 있기 때문이죠~
        // 리액트에서 이런 작업을 해주고있습니다~
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                video={video} />
        )
    })

    return (
        // class 는 className 으로 표현합니다... 
        // class 이미 컴포넌트를 생성할대 쓰이고있기때문에 이렇게 표현합니다.
        <ul className="col-md-4 list-group" >
            {videoItems}
        </ul>
    )
}

export default VideoList;