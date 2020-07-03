import {Row,Col} from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';

import {getAllBlogs, getAllAuthors} from 'lib/api';

export default function Home({blogs, authors}) {
  return (
    <PageLayout>
      {
        authors.map(author =>
          <AuthorIntro key={author.name}
            author={author}
          />
        )
      }
        <hr/>
        <Row className="mb-5">
          {/*<Col md="10">
              <CardListItem />
            </Col> */}
            {
              blogs.map(blog =>
              <Col key={blog.slug} md="4">
                <CardItem 
                  title={blog.title}
                  subtitle={blog.subtitle}
                  coverImage={blog.coverImage}
                  publishAt={blog.publishAt}
                  author={blog.author}
                />
              </Col>
              )
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
  const blogs = await getAllBlogs();
  const authors = await getAllAuthors();
  return {
    props: {
      blogs,
      authors
    }
  }
}
