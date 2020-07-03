import client from 'lib/sanity';


const blogFields = `
    title, 
    subtitle,
    'slug': slug.current,
    _createdAt
`;


export async function getAllBlogs() {
    const results = await client
        .fetch(`*[_type == "blog"]{${blogFields}} | order(_createdAt desc)`);

    return results;
}