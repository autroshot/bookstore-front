import { useSearchParams as usePackageSearchParams } from 'react-router-dom';

const QUERY_STRING_CONFIG = {
    categoryId: { queryStringkey: 'category-id', type: 'number' },
    isNew: { queryStringkey: 'is-new', type: 'boolean' },
    view: { queryStringkey: 'view', type: 'string' },
} as const satisfies QueryStringKeyMap;

/**
 * React Router의 useSearchParams에 key 제한과 타입 변환 기능을 추가한 커스텀 훅이다.
 */
export default function useSearchParams() {
    const [searchParams, setSearchParams] = usePackageSearchParams();

    return { getSearchParam, setSearchParam, deleteSearchParam };

    function getSearchParam<T extends Name>(
        name: T
    ): QueryStringKeyTypeWithNull[T] {
        let result;

        switch (getType(name)) {
            case 'number': {
                const value = searchParams.get(getQueryStringKey(name));
                result = value === null ? null : Number(value);

                break;
            }
            case 'boolean': {
                const value = searchParams.get(getQueryStringKey(name));
                if (value === 'true') {
                    result = true;
                    break;
                }
                if (value === 'false') {
                    result = false;
                    break;
                }
                result = null;

                break;
            }
            case 'string': {
                const value = searchParams.get(getQueryStringKey(name));
                result = value;

                break;
            }
            default: {
                throw Error('QUERY_STRING_CONFIG에 존재하지 않는 키입니다.');
            }
        }

        return result as QueryStringKeyTypeWithNull[T];
    }

    function setSearchParam<T extends Name>(
        name: T,
        value: QueryStringKeyType[T]
    ): void {
        setSearchParams((urlSearchParams) => {
            urlSearchParams.set(getQueryStringKey(name), String(value));
            return urlSearchParams;
        });
    }

    function deleteSearchParam(name: Name): void {
        setSearchParams((urlSearchParams) => {
            urlSearchParams.delete(getQueryStringKey(name));
            return urlSearchParams;
        });
    }

    function getQueryStringKey(name: Name) {
        return QUERY_STRING_CONFIG[name]['queryStringkey'];
    }
    function getType(name: Name) {
        return QUERY_STRING_CONFIG[name]['type'];
    }
}

type QueryStringKeyMapLiteral = typeof QUERY_STRING_CONFIG;
type QueryStringKeyType = {
    [T in keyof QueryStringKeyMapLiteral]: QueryStringKeyMapLiteral[T]['type'] extends 'number'
        ? number
        : QueryStringKeyMapLiteral[T]['type'] extends 'boolean'
        ? boolean
        : QueryStringKeyMapLiteral[T]['type'] extends 'string'
        ? string
        : unknown;
};
type QueryStringKeyTypeWithNull = {
    [T in keyof QueryStringKeyType]: QueryStringKeyType[T] | null;
};
type Name = keyof QueryStringKeyType;

type LiteralTypeString = 'string' | 'number' | 'boolean';
type QueryStringKeyMap = {
    [key: string]: { queryStringkey: string; type: LiteralTypeString };
};
