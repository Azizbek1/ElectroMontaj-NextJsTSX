export const getLocalStorage = (key: string) => {
    return localStorage.getItem(key)
}
// set value to localStorage
export const setLocalStorage = (key: string, value: any) => {
    return localStorage.setItem(key, value)
}