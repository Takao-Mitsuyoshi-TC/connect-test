export const useGetTopicsCategoryList = () => {
    const config = useRuntimeConfig();
    const route = useRoute();
    const params: {
        topics_group_id: string;
    } = {
        topics_group_id: String(route.params.id)
    }
    const now = new Date();
    const queryParams = new URLSearchParams(params);
    const asyncData = useAsyncData (
        `useGetTopicsCategoryList-${now}`,
        (): Promise<any> => {

            const apiUrl = `${config.public.apiDomainUrl}${config.public.apiBasePath}/topics-category/list`;
            const response = $fetch(`${apiUrl}?${queryParams}`)
            return response;
        }
    );

    return asyncData;
};

