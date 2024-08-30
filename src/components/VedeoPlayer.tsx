import { VideoPlayerSegment } from "../VideoJs/VideoPlayerSegment";
import viewIcon from '../assets/images/icon_view_gray.svg'
import timeIcon from '../assets/images/icon_time_gray.svg'
import { DisquesComments } from "./DisqusSection";
export const VideoPlayer = (props: any) => {
    const { video } = props;
    return (
        <>
            <div className="video-player-container">
                <div className="video-player">
                    <VideoPlayerSegment video={video} />
                    <ul className="video-tags">
                        <li className="video-tag"><a href="">lebron james </a></li>
                        <li className="video-tag"><a href="">NBA </a></li>
                    </ul>
                    <div className="video-title">
                        <h1>"He's On That New Juice" Kevin Garnett Says Lebron James Is On Roids!</h1>
                    </div>
                    <div className="veiw-time">
                        <div className="view">
                            <span><img src={viewIcon} alt="" /></span>
                            {video.views}
                        </div>
                        <div className="time">
                            <span><img src={timeIcon} alt="" /></span>
                            feb 24,2024
                        </div>

                    </div>
                    <div className="comments" style={{ width: "100%" }}>
                        <DisquesComments video={video} />
                    </div>
                </div>
                <aside className="ad-content">
                    ad
                </aside>
            </div>

        </>
    );
}