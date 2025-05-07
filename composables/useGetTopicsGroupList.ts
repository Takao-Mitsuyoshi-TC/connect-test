export const useGetTopicsGroupList = () => {
    const config = useRuntimeConfig();
    const now = new Date();
    const asyncData = useAsyncData (
        `useGetTopicsGroupList-${now}`,
        (): Promise<any> => {

            const apiUrl = `${config.public.apiDomainUrl}${config.public.apiBasePath}/topics-group/list`;
            const response = $fetch(apiUrl)
            return response;
        }
    );

    return asyncData;
};