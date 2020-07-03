import PageLayout from 'components/PageLayout';
import { useRouter } from 'next/router';

import { getBlogPostBySlug } from 'lib/api';


const BlogDetail = ({blogPost}) => {
    debugger;
    return (
        <PageLayout>
            <h1>{blogPost.title}</h1>
        </PageLayout>
    )
}

export async function getServerSideProps({params}) {
    const blogPost = await getBlogPostBySlug(params.slug);

    return {
        props: { blogPost }
    }
}

export default BlogDetail;