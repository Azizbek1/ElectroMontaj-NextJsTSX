export interface TransInfo {
    count: number;
    successAmount?: any;
    failedAmount?: any;
}
export interface IMenuPropsColumns {
    userId: string;
    number: string;
    status: string;
    dataReg: string;
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