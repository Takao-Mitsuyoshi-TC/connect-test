import type { LoginInfo } from "~/interfaces/auth";

export const useLogin = (info: LoginInfo) => {
    const config = useRuntimeConfig();
    const asyncData = useAsyncData (
        `useLogin-${info.email}-${info.password}`,
        (): Promise<any> => {
            const params: {
                email: string;
                password: string;
                login_save: number;
            } = {
                email: info.email,
                password: info.password,
                login_save: 0
            }

            const apiUrl = `${config.public.apiDomainUrl}${config.public.apiBasePath}/login`;
            const response = $fetch(apiUrl, { method: "POST", body: params})
            return response;
        }
    );

    return asyncData;
};