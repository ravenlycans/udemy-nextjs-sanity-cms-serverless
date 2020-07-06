import { getAllBlogs, getBlogsPaged } from 'lib/api';


export default async function APIGetBlogs(req, res) {
    let offset = 0;

    console.log(req.query.o);
    console.log(req.query.ord);
    if (req.query.o != "null") {
        offset = +req.query.o;
    }
    const blogs = await getBlogsPaged(offset, 3, !req.query.ord ? 'desc' : 'asc');
    res.status(200).json(blogs);
}
  