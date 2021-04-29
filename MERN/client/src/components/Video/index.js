import React, { useRef, useState } from 'react';
import FonVideo from '../../video/Pexels.mp4';
import { VideoStyles, Pause, Play } from './styles';


export function Video() {
    const[isShowIcon, setShowIcon] = useState(true);

    const ref = useRef(null);

    const HandlePauseVideo = () => {
        ref.current.pause();
        setShowIcon(true);
    }
    const HandlerPlayVideo = () => {
        ref.current.play();
        setShowIcon(false);
    }

    return <>
        {isShowIcon ? <Play onClick={HandlerPlayVideo}/> : <Pause onClick={HandlePauseVideo}/>}
        <VideoStyles loop autoPlay src={FonVideo} type="video/mp4" ref={ref}/>
    </>

}