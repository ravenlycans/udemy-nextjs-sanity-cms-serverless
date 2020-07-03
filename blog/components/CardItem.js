import { Card }  from 'react-bootstrap';
import Link from 'next/link';
import prettyDate from 'pretty-date-js';


const CardItem = ({title, subtitle, coverImage, link, publishAt, author}) => {

    return (
        <Card className={`fj-card`}>
            <div className="card-body-wrapper">
                <Card.Header
                className="d-flex flex-row">
                <img
                    src={author.avatarUrl ? author.avatarUrl : 'https://placekitten.com/50'}
                    className="rounded-circle mr-3"
                    height="50px"
                    width="50px"
                    alt="avatar"/>
                <div>
                    <Card.Title className="font-weight-bold mb-1">{author.name}</Card.Title>
                    <Card.Text className="card-date">Published: {prettyDate(publishAt).value + ' ' + prettyDate(publishAt).lang + ' ' + prettyDate(publishAt).misc}</Card.Text>
                </div>
                </Card.Header>
                <div className="view overlay">
                <Card.Img
                    src={coverImage}
                    alt="Card image cap"
                />
                </div>
                <Card.Body>
                <Card.Title className="card-main-title">{title}</Card.Title>
                <Card.Text>{subtitle}</Card.Text>
                </Card.Body>
            </div>
            { link && 
                <Link {...link}>
                    <a className="card-button">
                        Read More
                    </a>
                </Link>
            }
        </Card>
    );
}

export default CardItem;