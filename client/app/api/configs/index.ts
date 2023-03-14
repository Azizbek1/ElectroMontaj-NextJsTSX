export const API_URL = `${process.env.NEXT_PUBLIC_PUBLIKKEY}/api`;
//Slide
export const getSlideUrl = (string: string) => `/main/slider${string}`;
//Slide
export const getMenuUrl = (string: string) => `/menus/header${string}`;
//Slide
// News
export const getNewsUrl = (string: string) => `/main/news${string}`;
//Portfolio
export const getPortUrl = (string: string) => `/main/portfolio${string}`;
//About
export const getAboutUrl = (string: string) => `/main/about${string}`;
//Nam Doveryayur
export const getDoverUrl = (string: string) => `/main/trust${string}`;
//Servises Uslugi
export const getServisesUrl = (string: string) => `/main/service${string}`;
