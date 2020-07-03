import {Row,Col,Media,Image} from 'react-bootstrap';


const AuthorIntro = ({author}) => {
  return (
    <Row>
      <Col md="8">
          <Media className="mb-4 admin-intro">
          <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-3"
            src={author.avatar ? author.avatar : 'https://placekitten.com/64'}
            alt={author.name}
          />
          <Media.Body>
            <h5 className="font-weight-bold mb-0">{author.name}</h5>
            <p className="welcome-text">
              {author.shortBio}
            </p>
          </Media.Body>
        </Media>
      </Col>
    </Row>
    )
}

export default AuthorIntro;