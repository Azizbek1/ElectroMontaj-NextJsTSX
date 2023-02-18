// export interface IPort {
//     image: string
//     title: string
//     link: string
//     id?: number,
// }


export interface Datum {
    title: string;
    link: string;
    image: string;
}

export interface IPort {
    data: Datum[];
}



