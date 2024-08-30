

import { VideoPlayer } from '../components/VedeoPlayer';
import { useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/VideoPage';
import customFetch from '../utils/customFetch';
import { Helmet } from 'react-helmet-async';

export const loader = async ({ params }: any) => {
    const data = await customFetch.get(`/videos/${params.id}`);
    await customFetch.post('/videos/increseVideoView', {
        videoId: `${params.id}`
    })
    return { video: data.data.video };
}

const Video = () => {
    const { video } = useLoaderData() as { video: any };

    return (
        <>
            <Helmet>
                <title>{video.title}</title>
                <link rel="canonical" href={`${window.location.href}`} />
                <meta name='description' content={video?.meta}></meta>
            </Helmet>
            <Wrapper>
                <VideoPlayer video={video} />
            </Wrapper>
        </>
    );
};
export default Video;
