import { useLoaderData } from "react-router-dom";
import { Categories } from "../components/Categories";
import { Content } from "../components/Content";
import { FeaturedVideos } from "../components/FeaturedVideos";
import { TrendingNow } from "../components/TrendingNow";
import customFetch from '../utils/customFetch'
import { Helmet } from "react-helmet-async";

export const loader = async ({ request }: { request: any }) => {
    let isSearch = false;
    const tages: string[] = [
        "News",
        "Ratchet",
        "Drake",
        "Street Fight",
        "Homeless",
        "Jay Z",
        "Kardashian",
        "Kodak Black",
        "GirlFight",
        "Comedy SKit",
        "Road Rage",
        "Megan Thee Stallion",
        "Lil Baby",
        "XXXTentacion",
    ];
    try {
        const params = Object.fromEntries([
            ...new URL(request.url).searchParams.entries(),
        ]);
        isSearch = params.hasOwnProperty('search');
        const videos = await customFetch.get('/videos', {
            params
        });
        const trending = await customFetch.get('/trending');
        return { data: videos.data, trending: trending.data, tages: tages, isSearch: isSearch };
    } catch (error) {
        console.error('Error fetching videos:', error);
    }
    return null;
}


const Home = () => {
    const { data, tages, trending } = useLoaderData() as { data: any, trending: any, tages: string[], isSearch: boolean };
    console.log(data);
    const pageNumber = data.currentPage;
    return (
        <>
            <Helmet>
                <title>Zone6:entertenment site</title>
                <link rel="canonical" href={window.location.href} />
                <meta name='description' content='see videos of latest trends' />
            </Helmet>
            <Categories tages={tages} />
            {pageNumber == 1 ? <>
                <TrendingNow trending={trending} />
                <FeaturedVideos />
            </> : null}
            <Content data={data} numOfPages={data.numOfPages} currentPage={data.currentPage} />
        </>
    );
};
export default Home;