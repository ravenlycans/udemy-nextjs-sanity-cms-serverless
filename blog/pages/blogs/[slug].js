import PageLayout from 'components/PageLayout';
import { useRouter } from 'next/router';

import { getBlogPostBySlug, getAllBlogs } from 'lib/api';


const BlogDetail = ({blogPost}) => {
    debugger;
    return (
        <PageLayout>
            <h1>{blogPost.title}</h1>
        </PageLayout>
    )
}

export async function getStaticProps({params}) {
    const blogPost = await getBlogPostBySlug(params.slug);

    return {
        props: { blogPost }
    }
}

export async function getStaticPaths() {
    const blogs = await getAllBlogs();

    var resultObj = {
        paths: [],
        fallback: false
    }

    blogs.map(blog => {
        resultObj.paths.push({params:{slug: blog.slug}});
    });

    return resultObj;
}

export default BlogDetail;