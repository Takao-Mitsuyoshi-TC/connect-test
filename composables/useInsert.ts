import type { InsertInfo } from "~/interfaces/member";

export const useInsert = (info: InsertInfo) => {
    const config = useRuntimeConfig();
    const asyncData = useAsyncData (
        `useLogin-${info.name1}-${info.name2}`,
        (): Promise<any> => {
            const params: {
                name1: string;
                name2: string;
                email: string;
                login_pwd: string;
                tel: string;
                department: string;
                position: string;
                login_ok_flg: string;
            } = {
                name1: info.name1,
                name2: info.name2,
                email: info.email,
                login_pwd: info.login_pwd,
                tel: info.tel,
                department: info.department,
                position: info.position,
                login_ok_flg: "1"
            }

            const apiUrl = `${config.public.apiDomainUrl}${config.public.apiBasePath}/member/insert`;
            const response = $fetch(apiUrl, { method: "POST", body: params})
            return response;
        }
    );

    return asyncData;
};