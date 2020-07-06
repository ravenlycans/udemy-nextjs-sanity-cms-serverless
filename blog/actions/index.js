import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

export const useGetHello = () => {
    return useSWR('/api/hello', fetcher);
}

export const useGetBlogs = (initialData, offset, order) => {
    return useSWR(`/api/blogs?o=${offset || 0}&ord=${order || 0}`, fetcher, {initialData});
}

export const useGetAllAuthors = (initialData) => {
    return useSWR(`/api/authors`, fetcher, {initialData});
}
