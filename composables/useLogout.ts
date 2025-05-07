export const useLogout = () => {
    const config = useRuntimeConfig();
    const asyncData = useAsyncData (
        `useLogout`,
        (): Promise<any> => {

            const apiUrl = `${config.public.apiDomainUrl}${config.public.apiBasePath}/logout`;
            const response = $fetch(apiUrl, { method: "POST"})
            return response;
        }
    );

    return asyncData;
};