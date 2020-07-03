import {Container} from 'react-bootstrap';
import BlogNavbar from 'components/BlogNavbar';

export default function PageLayout({children,className}) {

    return (
        <Container>
            <BlogNavbar />
            <div className={`page-wrapper ${className}`}>
                {children}
            </div>
            <footer className="page-footer">
                <div>
                    <a href="https://github.com/silverlycan/" target="_blank">github</a>
                </div>
            </footer>            
        </Container>
    );
}