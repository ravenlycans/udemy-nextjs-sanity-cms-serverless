import { useState } from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu';

import { getBlogsPaged, getAllAuthors } from 'lib/api';
import { useGetAllAuthors } from 'actions';
import { useGetBlogsPages } from 'actions/pagination';

export default function Home({blogs, authors: IDAuthors}) {
  const [filter, setFilter] = useState({
    view: {list: 0 },
    order: 0
  });

  const { data: authors, error: authorsErrors } = useGetAllAuthors(IDAuthors);
  const { 
    pages,
    isLoadingMore,
    isReachingEnd,
    loadMore
   } = useGetBlogsPages({blogs, filter});

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
          {pages}
        </Row>
        <hr />
        <Row className="mb-9">
          <Col md="12" className="text-center">
              { !isReachingEnd && !isLoadingMore &&
                <Button variant="outline-success" size="lg" onClick={loadMore}>Load More ...</Button>
              }
              { isReachingEnd && !isLoadingMore &&
                <Button variant="outline-secondary" size="lg" disabled={true}>No more ..</Button>
              }
              { isLoadingMore && 
                <Button variant="outline-danger" size="lg" disabled={true}>Loading More ...</Button>
              }
          </Col>
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
