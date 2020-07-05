import { Card }  from 'react-bootstrap';
import Link from 'next/link';
import prettyDate from 'pretty-date-js';
import { urlFor } from 'lib/api';


const CardItem = ({title, subtitle, coverImage, coverImageAlt, link, publishAt, author}) => {

    return (
        <Card className={`fj-card`}>
            <div className="card-body-wrapper">
                <Card.Header
                className="d-flex flex-row">
                <img
                    src={urlFor(author.avatarUrl).height(50).fit('max').url()}
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
                    height='150px'
                    src={urlFor(coverImage).height(150).fit('clip').crop('center').url()}
                    alt={coverImageAlt}
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