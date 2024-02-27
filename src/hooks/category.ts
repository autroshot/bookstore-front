import { useEffect, useState } from 'react';
import { fetchCategories } from '../apis/category';
import { Category } from '../models/category';

export default function useCategory() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetchCategories().then((categories) => setCategories(categories));
    }, []);

    return categories;
}
