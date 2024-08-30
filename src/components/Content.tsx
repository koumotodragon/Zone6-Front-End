
import { Video } from "../UI";
import Wrapper from "../assets/wrappers/Content";
import PageBtnContainer from '../components/PageBtnContainer';

export const Content = (props: any) => {

  const { videos, currentPage, numOfPages } = props.data;
  const videosContent = videos.length;

  if (videosContent == 0) {
    return (
      <Wrapper>
        <div className="Featured-Header">
          Today
          <span>&nbsp; VIDEOS</span>
        </div>
        <div className="Content-Container" >
          <div style={{ height: "50vh", width: "80vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
            No videos found!
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="Featured-Header">
        Today
        <span>&nbsp; VIDEOS</span>
      </div>
      <div className="Content-Container">
        {videos.map((item: any, index: number) => {
          return (
            <Video
              key={index}
              id={item._id}
              img={item.thumbnail}
              title={item.title}
              views={item.views}
              comments={125}
              videoUrl={item.videoUrl}
            />
          );
        })}

      </div>
      <PageBtnContainer numOfPages={numOfPages} currentPage={currentPage} />
    </Wrapper>
  );
};
