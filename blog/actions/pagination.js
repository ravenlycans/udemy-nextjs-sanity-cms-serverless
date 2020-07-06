import { useSWRPages } from 'swr';
import { useGetBlogs } from 'actions';

import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';
import {Row, Col, Spinner} from 'react-bootstrap';

export const useGetBlogsPages = ({blogs: initialData, filter}) => {

    return useSWRPages(
        'index-page',
        ({offset, withSWR}) => {
            const { data: blogs } = withSWR(useGetBlogs(null, offset, filter.order));
            
            console.log(offset);

            if (!blogs) {
                return (
                    <Row className="mb-12" className="text-center">
                        <Col md="12">
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading....</span>
                            </Spinner>
                        </Col>
                    </Row>
                );
            }

            return blogs?.map(blog =>
                      filter.view.list ?
                        <Col key={`${blog.slug}-list`} md="9">
                          <CardListItem 
                            title={blog.title}
                            subtitle={blog.subtitle}
                            publishAt={blog.publishAt}
                            author={blog.author}
                            link={{
                              href: '/blogs/[slug]',
                              as:`/blogs/${blog.slug}`
                            }}
                          />
                        </Col>
                      :
                      <Col key={blog.slug} md="4">
                        <CardItem 
                          title={blog.title}
                          subtitle={blog.subtitle}
                          coverImage={blog.coverImage}
                          coverImageAlt={blog.coverImageAlt}
                          publishAt={blog.publishAt}
                          author={blog.author}
                          link={{
                            href:'/blogs/[slug]',
                            as:`/blogs/${blog.slug}`
                          }}
                        />
                    </Col>
                    )
        },
        // Here you will compute offset, that will get passed into the 2nd argument for this function.
        // SWR: Data you will get from 'withSWR' function.
        // index: Number of current page.
        (SWR, index) => {
            if (SWR.data && SWR.data.length === 0) {
                return null;
            } else {
                return ++index * 3;
            }
        },
        [filter]
    );
}

