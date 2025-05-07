export interface TopicsGroupInfo {
    topics_group_id: number;
    group_nm: string;
}

export interface TopicsCategoryInfo {
    topics_category_id: number;
    category_nm: string;
}

export interface ThumbnailInfo {
    id: string;
    url_org: string;
}

export interface FileInfo {
    id: string;
    url_org: string;
    dl_link: string;
    desc: string;
}

export interface MasterInfo {
    key: string;
    label: string;
}

export interface TopicsInfo {
    topics_id: number;
    subject: string;
    contents_type_nm: string;
    thumbnail: ThumbnailInfo;
    file: FileInfo;
    product_brand: MasterInfo[];
}
