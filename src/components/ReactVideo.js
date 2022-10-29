import React from "react";
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import introVideo from '../assets/videos/Highlight part 1.mp4';
import '../css/Video.css';

const ReactVideo = () => {
    return(
        <div className="video-2l">
            <h1>Chào mừng đến với trang chủ</h1>
            <p>Dưới đây là những khoảnh khắc về game của tôi</p>
            <Video autoPlay loop 
                onCanPlayThrough={()=>{
                    console.log('video play')
                }}
            >
                <source src={introVideo} type="video/webm"/>
            </Video>
        </div>
    );   
};

export default ReactVideo;