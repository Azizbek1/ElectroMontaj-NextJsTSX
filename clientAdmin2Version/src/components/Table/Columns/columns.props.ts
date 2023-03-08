export interface TransInfo {
    count: number;
    successAmount?: any;
    failedAmount?: any;
}
export interface IMenuPropsColumns {
    name: string;
    url: string;
    icon: string;
    category_id?: string;
}
export interface IDataApiUlash {
    title: string
    key: string
    dataIndex: string
}
export interface ISMSProps {
    userId: string
    phone: string
    isActive: string
    endActive: string
}