import type { ResetPasswordInfo } from "~/interfaces/auth";

export const useResetPassword = (info: ResetPasswordInfo) => {
    const config = useRuntimeConfig();
    const asyncData = useAsyncData (
        `useResetPassword-${info.login_id}-${info.current_password}-${info.new_password}`,
        (): Promise<any> => {
            const params: {
                login_id: string;
                current_password: string;
                new_password: string;
            } = {
                login_id: info.login_id,
                current_password: info.current_password,
                new_password: info.new_password
            }

            const apiUrl = `${config.public.apiDomainUrl}${config.public.apiBasePath}/reset_password`;
            const response = $fetch(apiUrl, { method: "POST", body: params})
            return response;
        }
    );

    return asyncData;
};