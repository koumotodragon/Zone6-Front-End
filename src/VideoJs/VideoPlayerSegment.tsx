import { useRef } from 'react';
import Player from 'video.js/dist/types/player';
import VideoJS from './VideoJs';
export const VideoPlayerSegment = (props: any) => {
    console.log(props.video);
    const { videoUrl } = props.video;
    const playerRef = useRef<Player | null>(null);
    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: videoUrl,
            type: 'video/mp4'
        }]
    };
    // https://www.shutterstock.com/shutterstock/videos/1103562341/preview/stock-footage-animation-of-network-of-profile-icons-over-diverse-man-and-woman-discussing-over-a-laptop-at-office.webm
    const handlePlayerReady = (player: any) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
            // videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            // videojs.log('player will dispose');
        });
    };

    return (
        <>
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </>
    );
};
