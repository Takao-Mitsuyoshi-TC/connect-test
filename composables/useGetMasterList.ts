export const useGetMasterList = (cvtable_id: string) => {
    const config = useRuntimeConfig();
    const route = useRoute();
    
    const params: {
        csvtable_id: string;
    } = {
        csvtable_id: cvtable_id
    }
    const now = new Date();
    const queryParams = new URLSearchParams(params);
    const asyncData = useAsyncData (
        `useGetMasterList-${cvtable_id}`,
        (): Promise<any> => {

            const apiUrl = `${config.public.apiDomainUrl}${config.public.apiBasePath}/master/list`;
            const response = $fetch(`${apiUrl}?${queryParams}`)
            return response;
        }
    );

    return asyncData;
};

