import { useRef } from "react";
import { Video } from "../UI";
// import "./TrendingNow.css";
import Wrapper from "../assets/wrappers/TrendingNow";

// const videos = [
//   {
//     "tags": [],
//     "_id": "6619818a9e8477f452952990",
//     "title": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself.",
//     "thumbnail": "http://localhost:5000/uploads/shannon-tremaine-NRz7SfpnqUM-unsplash.jpg",
//     "videoUrl": "http://localhost:5000/uploads/River.mp4",
//     "views": 0,
//     "uploadedAt": "2024-04-12T13:16:58.040Z",
//     "__v": 0
//   },
//   {
//     "tags": [],
//     "_id": "6619818c9e8477f452952992",
//     "title": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself.",
//     "thumbnail": "http://localhost:5000/uploads/shannon-tremaine-NRz7SfpnqUM-unsplash.jpg",
//     "videoUrl": "http://localhost:5000/uploads/River.mp4",
//     "views": 13,
//     "uploadedAt": "2024-04-12T13:16:58.040Z",
//     "__v": 0
//   },
//   {
//     "tags": [],
//     "_id": "6619818e9e8477f452952994",
//     "title": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself.",
//     "thumbnail": "http://localhost:5000/uploads/shannon-tremaine-NRz7SfpnqUM-unsplash.jpg",
//     "videoUrl": "http://localhost:5000/uploads/River.mp4",
//     "views": 0,
//     "uploadedAt": "2024-04-12T13:16:58.040Z",
//     "__v": 0
//   },
//   {
//     "tags": [],
//     "_id": "661981969e8477f452952996",
//     "title": "the story of a giant rabbit with a heart bigger than himself.",
//     "thumbnail": "http://localhost:5000/uploads/shannon-tremaine-NRz7SfpnqUM-unsplash.jpg",
//     "videoUrl": "http://localhost:5000/uploads/River.mp4",
//     "views": 0,
//     "uploadedAt": "2024-04-12T13:16:58.040Z",
//     "__v": 0
//   },
//   {
//     "tags": [],
//     "_id": "661981979e8477f452952998",
//     "title": "the story of a giant rabbit with a heart bigger than himself.",
//     "thumbnail": "http://localhost:5000/uploads/shannon-tremaine-NRz7SfpnqUM-unsplash.jpg",
//     "videoUrl": "http://localhost:5000/uploads/River.mp4",
//     "views": 0,
//     "uploadedAt": "2024-04-12T13:16:58.040Z",
//     "__v": 0
//   },
//   {
//     "tags": [],
//     "_id": "661981ba9e8477f45295299e",
//     "title": "the story of a giant rabbit with a heart bigger than himself.",
//     "thumbnail": "http://localhost:5000/uploads/shannon-tremaine-NRz7SfpnqUM-unsplash.jpg",
//     "videoUrl": "http://localhost:5000/uploads/River.mp4",
//     "views": 0,
//     "uploadedAt": "2024-04-12T13:16:58.040Z",
//     "__v": 0
//   },
//   {
//     "tags": [],
//     "_id": "661981bb9e8477f4529529a0",
//     "title": "the story of a giant rabbit with a heart bigger than himself.",
//     "thumbnail": "http://localhost:5000/uploads/shannon-tremaine-NRz7SfpnqUM-unsplash.jpg",
//     "videoUrl": "http://localhost:5000/uploads/River.mp4",
//     "views": 0,
//     "uploadedAt": "2024-04-12T13:16:58.040Z",
//     "__v": 0
//   },
//   {
//     "tags": [],
//     "_id": "6619a0579e8477f4529529ac",
//     "title": "the story of a giant rabbit with a heart bigger than himself.",
//     "thumbnail": "http://localhost:5000/uploads/shannon-tremaine-NRz7SfpnqUM-unsplash.jpg",
//     "videoUrl": "http://localhost:5000/uploads/ElephantsDream.mp4",
//     "views": 0,
//     "uploadedAt": "2024-04-12T13:16:58.040Z",
//     "__v": 0
//   },
//   {
//     "tags": [],
//     "_id": "661d6f599d9f0abd777a44f0",
//     "title": "random 1",
//     "thumbnail": "http://localhost:5000/uploads/pexels-katie-burandt-1212693.jpg",
//     "videoUrl": "http://localhost:5000/uploads/BigBuckBunny.mp4",
//     "views": 0,
//     "uploadedAt": "2024-04-15T17:53:39.057Z",
//     "__v": 0
//   },
//   {
//     "tags": [],
//     "_id": "661d77cc9d9f0abd777a4510",
//     "title": "testing video 1",
//     "thumbnail": "http://localhost:5000/uploads/mehdi-messrro-TKlxhlRdj9A-unsplash.jpg",
//     "videoUrl": "http://localhost:5000/uploads/ElephantsDream.mp4",
//     "views": 0,
//     "uploadedAt": "2024-04-15T17:53:39.057Z",
//     "__v": 0
//   }
// ];

export const TrendingNow = ({ trending }: any) => {

  const boxRef = useRef<HTMLDivElement>(null);
  const btnpressprev = () => {
    if (boxRef.current) {
      const width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft -= width;

    }
  }

  const btnpressnext = () => {
    if (boxRef.current) {
      const width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft += width;

    }
  }


  return (
    <Wrapper>

      <div className="Trending-Container">
        <div className="Trending-Header">
          TRENDING
          <span>&nbsp; NOW</span>
        </div>
        <div className="videos-carousel">
          <div
            className="Trending-Videos"
            style={{
              overflowX: "hidden",
              scrollBehavior: "smooth",
            }}
            ref={boxRef}
          >
            {trending.videos.map((item: any, index: number) => {
              return (
                <Video
                  key={index}
                  id={item._id}
                  img={item.thumbnail}
                  title={item.title}
                  views={item.views}
                  comments={478}
                  videoUrl={item.videoUrl}
                />
              );
            })}
          </div>
          <div className="video-next" onClick={btnpressnext}>next</div>
          <div className="video-prev" onClick={btnpressprev}>prev</div>
        </div>
      </div>
    </Wrapper>
  );
};
