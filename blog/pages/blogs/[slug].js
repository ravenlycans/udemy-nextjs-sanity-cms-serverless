import PageLayout from 'components/PageLayout';
import HighlightCode from 'components/HighlightCode';
import {Row, Col } from 'react-bootstrap';
import BlockContent from '@sanity/block-content-to-react';

import { getBlogPostBySlug, getAllBlogs, urlFor } from 'lib/api';

import prettyDate from 'pretty-date-js';

const serializers = {
    types: {
        code: ({node: {language, code, filename}}) => {
            return (
                <HighlightCode language={language}>
                    {code}
                    <div className="code-filename">{filename}</div>
                </HighlightCode>
            )
        },
        image: ({node: {alt, asset}}) => {
            debugger
            return (
                <div className="blog-image">
                    <img src={urlFor(asset).height(450).fit('max').url()}/>
                    <div className="image-alt">{alt}</div>
                </div>
            )
        }
    }
}

const BlogDetail = ({blogPost}) => {
    return (
        <PageLayout className="blog-detail-page">
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                <div className="blog-detail-header">
                    <p className="lead mb-0">
                    <img
                        src={urlFor(blogPost.author?.avatarUrl).height(50).fit('max').url()}
                        className="rounded-circle mr-3"
                        height="50px"
                        width="50px"
                        alt="avatar"/>
                    {blogPost.author?.name}
                    {', '} {prettyDate(blogPost.publishAt).value + ' ' + prettyDate(blogPost.publishAt).lang + ' ' + prettyDate(blogPost.publishAt).misc}
                    </p>
                    <h1 className="font-weight-bold blog-detail-header-title mb-0">{blogPost.title}</h1>
                    <h2 className="blog-detail-header-subtitle mb-3">{blogPost.subtitle}</h2>
                    {blogPost.coverImage && 
                        <img
                            className="img-fluid rounded"
                            src={urlFor(blogPost.coverImage).height(600).fit('max').url()} alt=""/>
                    }
                </div>
                <hr/>
                <BlockContent
                    serializers={serializers}
                    blocks={blogPost.content}
                />
                </Col>
            </Row>
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

    return {
        paths: blogs?.map(blog => ({params: {slug: blog.slug}})),
        fallback: false
    }
}

export default BlogDetail;