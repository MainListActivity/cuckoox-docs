import type { CollectionKey } from 'astro:content';
import type { Props as ImageProps } from '@components/Image.astro';

import Icon from '@img/icon.svg';


type Metadata = {
    [K in CollectionKey]?: {
        title: string;
        icon: ImageProps['src'];
        repo?: {
            title: string;
            href: string;
        };
    };
};

export const metadata = {
    'doc-prd-law': {
        title: '法律工作台',
        icon: {
            light: Icon,
            dark: Icon,
        },
        repo: {
            title: 'surrealdb/surrealdb.net',
            href: 'https://github.com/surrealdb/surrealdb.net',
        },
    },
    'doc-dev': {
        title: '开发人员文档',
        icon: {
            light: Icon,
            dark: Icon,
        },
        repo: {
            title: 'surrealdb/surrealml',
            href: 'https://github.com/surrealdb/surrealml',
        },
    },
} satisfies Metadata;
