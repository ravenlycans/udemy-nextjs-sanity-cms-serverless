import {Row,Col,Media,Image} from 'react-bootstrap';


const AuthorIntro = () => 
    <Row>
    <Col md="8">
      <Media className="mb-4 admin-intro">
        <Image
          roundedCircle
          width={64}
          height={64}
          className="mr-3"
          src="https://avatars3.githubusercontent.com/u/62778450?s=60&v=4"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5 className="font-weight-bold mb-0">Hello there,</h5>
          <p className="welcome-text">
            My name is Kim Nybo Andersen and I am an experienced software engineer and freelance developer.
            I am not a frontend designer so this page is very simple in it's styling.
          </p>
        </Media.Body>
      </Media>
    </Col>
  </Row>


export default AuthorIntro;