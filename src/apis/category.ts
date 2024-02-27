import { Category } from '../models/category';
import { httpClient } from './http';

async function fetchCategories() {
    const res = await httpClient.get<Category[]>('/categories');

    return res?.data ?? [];
}

export { fetchCategories };
