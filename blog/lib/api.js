import client from 'lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

const blogFields = `
    title, 
    subtitle,
    'slug': slug.current,
    coverImage,
    publishAt,
    'author': author->{name, 'avatarUrl': avatar.asset->url},
    _createdAt
`;

const authorFields = `
    name,
    'avatar': avatar.asset->url,
    shortBio
`;

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}

export async function getAllBlogs() {
    const results = await client
        .fetch(`*[_type == "blog"]{${blogFields}} | order(publishAt desc)`);

    return results;
}

export async function getAllAuthors() {
    const results = await client
        .fetch(`*[_type == "author"]{${authorFields}} | order(_createdAt asc)`);

    return results;
}

export async function getBlogsPaged(offset = 0, length = 3, order = 'desc') {
    const results = await client
        .fetch(`*[_type == "blog"] | order(publishAt ${order})[${offset}...${offset+length}]{${blogFields}}`);

    return results;
}

export async function getBlogPostBySlug(slug) {
    const result = await client
        .fetch(`*[_type == "blog" && slug.current == $slug]{${blogFields}, content[]{...,"asset": asset->}} | order(publishAt asc)`, {slug})
        .then(res => res?.[0]);

    return result;
}