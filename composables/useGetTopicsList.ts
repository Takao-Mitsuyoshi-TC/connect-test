export const useGetTopicsList = () => {
    const config = useRuntimeConfig();
    const route = useRoute();
    const params: {
        topics_group_id: string;
        contents_type: string;
    } = {
        topics_group_id: String(route.params.category_id),
        contents_type: String(route.params.id)
    }
    const now = new Date();
    const queryParams = new URLSearchParams(params);
    const asyncData = useAsyncData (
        `useGetTopicsList-${now}`,
        (): Promise<any> => {

            const apiUrl = `${config.public.apiDomainUrl}${config.public.apiBasePath}/topics_list`;
            const response = $fetch(`${apiUrl}?${queryParams}`)
            return response;
        }
    );

    return asyncData;
};

