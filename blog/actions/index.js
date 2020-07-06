import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

export const useGetHello = () => {
    return useSWR('/api/hello', fetcher);
}

export const useGetBlogs = (initialData) => {
    return useSWR(`/api/blogs`, fetcher, {initialData});
}

export const useGetAllAuthors = (initialData) => {
    return useSWR(`/api/authors`, fetcher, {initialData});
}
