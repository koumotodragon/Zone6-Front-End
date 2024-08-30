import "./Video.css";
import { Link } from "react-router-dom";
export const Video = (props: any) => {
  const { id, img, title, views, comments } = props;

  return (
    <Link to={`/video/${id}`}>
      <div className="video-container">
        <div className="rounded-image-container">
          <img src={img} className="rounded-image" loading="lazy" />
        </div>
        <div>{title}</div>
        <div className="comments-container">
          <div className="vedio-view">{views}</div>
          <div className="vedio-comment">{comments}</div>
        </div>
      </div>
    </Link>
  );
};
