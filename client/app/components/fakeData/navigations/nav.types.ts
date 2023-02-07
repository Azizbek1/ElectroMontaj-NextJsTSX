import { TypeMaterialIconName } from '@/shared/types/icons.types'

export interface IMenuItem {
    icon: TypeMaterialIconName
    title: string
    link: string
    id: number
}
export interface IMenuAdressItem {
    icon: TypeMaterialIconName
    title: string
    id: number
}
export interface IMenuAddrePhoneItem {
    icon: TypeMaterialIconName
    title: string
    id: number
}

/* ===============  Iterfases  ==================  */
export interface IMenuAdress {
    items: IMenuAdressItem[]
}
export interface IMenuAddrePhone {
    items: IMenuAddrePhoneItem[]
}
export interface IMenu {
    items: IMenuItem[]
}