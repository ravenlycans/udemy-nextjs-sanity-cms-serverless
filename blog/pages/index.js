import { useState } from 'react';
import {Row,Col} from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';
import FilteringMenu from 'components/FilteringMenu';

import { getBlogsPaged, getAllAuthors } from 'lib/api';
import { useGetBlogs, useGetAllAuthors } from 'actions';

export default function Home({blogs: IDBlogs, authors: IDAuthors}) {
  const [filter, setFilter] = useState({
    view: {list: 0 }
  });

  const { data: authors, error: authorsErrors } = useGetAllAuthors(IDAuthors);
  const { data: blogs, error: blogsErrors } = useGetBlogs(IDBlogs);

  return (
    <PageLayout>
      { authors && 
        authors?.map(author =>
          <AuthorIntro key={author.name}
            author={author}
          />
        )
      }
        <FilteringMenu 
          filter={filter}
          onChange={(option, value) => {
            setFilter({...filter, [option]: value});
          }}
        />
        <hr/>
        <Row className="mb-5">
            { blogs && 
              blogs?.map(blog =>
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
            }
            {!blogs && 
              <Col>
                <h1 className="text-center">No blogs found!</h1>
              </Col>
            }
        </Row>
    </PageLayout>
  );
}

// This function is called during the build (build time).
// This means that is it called on the server, never on the client.
// Provides props to your page.
// It will create a static page.
export async function getStaticProps() {
  const blogs = await getBlogsPaged();
  const authors = await getAllAuthors();
  return {
    props: {
      blogs,
      authors
    }
  }
}
