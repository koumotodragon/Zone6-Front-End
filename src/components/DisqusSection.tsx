import { DiscussionEmbed } from 'disqus-react';
// import { CommentCount } from 'disqus-react';
const shortName = "shortanme";// shortname provided by discuss
export const DisquesComments = ({ video }: any) => {
    const pageUrl = typeof window !== 'undefined' ? window.location.href : "";
    const disqusConfig = {
        url: pageUrl,
        identifier: video._id,
        title: video.title,
    }

    return (
        <>
            {/* <CommentCount
                shortname='ashokkumawat288'
                config={
                    disqusConfig
                }
            >
                Comments
            </CommentCount> */}
            <DiscussionEmbed
                shortname={shortName}
                config={
                    disqusConfig
                }
            />
        </>
    );
}