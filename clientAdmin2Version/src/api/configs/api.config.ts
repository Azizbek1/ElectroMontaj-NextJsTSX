export const API_URL = `${import.meta.env.VITE_APP_BASE_URL}/api`

// Menu
export const getMenuUrl = (string: string) => `/menus/header${string}`
//Slide 
export const getSlideUrl = (string: string) => `/main/slider${string}`
export const getUsersUrl = (string: string) => `/user${string}`
export const getMoviesUrl = (string: string) => `/movies${string}`
export const getGenresUrl = (string: string) => `/genres${string}`
export const getActorsUrl = (string: string) => `/actors${string}`
export const getRatingsUrl = (string: string) => `/ratings${string}`
