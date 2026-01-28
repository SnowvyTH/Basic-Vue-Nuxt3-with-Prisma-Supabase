import { type Post } from '~~/app/types/post';

export default () => {
    const WP_URL = 'https://www.itgenius.co.th/sandbox_api/flutter_news_api';
    const get = async <T>(endpoint: string) => {
        return useFetch<T>(`${WP_URL}/wp-json/wp/v2/${endpoint}`)
    }

    const getPosts = async(
        category?: number,
        page: number = 1,
        perPage: number = 10,
        fields: string = 'author,id,excerpt,title,link,slug,date',
    ) => {
        let query: string = `posts?_fields=${fields}&page=${page}&per_page=${perPage}`;
        if (category) {
            query += `&categories=${category}`;
        }
        return get<Post[]>(query);
    }

    return {
        get,
        getPosts
    }
}
