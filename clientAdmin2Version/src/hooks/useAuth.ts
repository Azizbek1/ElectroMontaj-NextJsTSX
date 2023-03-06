import { useTypedSelector } from './useTypedSelector'

export const useAuth = () => useTypedSelector((state: any) => state.user)
