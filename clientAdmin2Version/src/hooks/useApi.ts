import { useQuery, UseQueryOptions } from "react-query";
import { useMutation, UseMutationOptions } from "react-query";
import { AxiosResponse } from "axios";
import api from "src/api/interceptors";


const useApi = <Data = any, Error = any>(
    method: string,
    params: object = {},
    options: UseQueryOptions<AxiosResponse<Data>, Error> = {}
) =>
    useQuery([method, params], async () => {
        try {
            // @ts-ignore
            const res: any = await api.post<Data>("/", { method }, { ...options });
            return res.data.result;
        } catch (err) {
            return err;
        }
    });

const useApiMutation = <Variables = any, Response = any, Error = any>(
    method: string,
    options: UseMutationOptions<AxiosResponse<Response>, Error, Variables> = {}
) =>
    useMutation<AxiosResponse<Response>, Error, Variables>(
        (params) => {
            const response = api.post("/", { method, params });
            return response;
        },
        { ...options }
    );

export { useApiMutation };
export default useApi;
