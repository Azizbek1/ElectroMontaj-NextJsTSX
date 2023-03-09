export interface IMenuPropsColumns {
    name: string;
    url: string;
    icon: string;
    category_id?: string;
}
export interface ISlidePropsColumns {
    name: string;
    url: File;
    slogan: string;
    id?: string;
    show?: boolean | string;
}
