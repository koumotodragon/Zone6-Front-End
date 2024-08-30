import { useLoaderData } from "react-router-dom";
import { Content } from "../components/Content";
import customFetch from '../utils/customFetch'

export const loader = async ({ request }: { request: any }) => {

    try {
        const params = Object.fromEntries([
            ...new URL(request.url).searchParams.entries(),
        ]);
        const videos = await customFetch.get('/videos', {
            params
        });
        return { data: videos.data };
    } catch (error) {
        console.error('Error fetching videos:', error);
    }
    return null;
}


const Search = () => {
    const { data } = useLoaderData() as { data: any };
    return (
        <>
            <Content data={data} numOfPages={data.numOfPages} currentPage={data.currentPage} />
        </>
    );
};
export default Search;