import { getAllBlogs, getBlogsPaged } from 'lib/api';


export default async function APIGetBlogs(req, res) {
    const blogs = await getBlogsPaged(0, 3, 'desc');
    res.status(200).json(blogs);
}
  