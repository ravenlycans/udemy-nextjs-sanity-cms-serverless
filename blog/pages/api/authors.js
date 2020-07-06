import { getAllAuthors } from 'lib/api';

export default async function APIGetAllAuthors(req, res) {
    const authors = await getAllAuthors();
    res.status(200).json(authors);
}