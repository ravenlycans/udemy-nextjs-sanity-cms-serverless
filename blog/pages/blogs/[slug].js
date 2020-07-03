import PageLayout from 'components/PageLayout';
import { useRouter } from 'next/router';


const BlogDetail = () => {
    const router = useRouter();
    debugger;
    return (
        <PageLayout>
            <h1>Hello Blog Detail. - {router.query?.slug}</h1>
        </PageLayout>
    )
}

export default BlogDetail;