import type { ReminderInfo } from "~/interfaces/auth";

export const useReminder = (info: ReminderInfo) => {
    const config = useRuntimeConfig();
    const asyncData = useAsyncData (
        `useReminder-${info.email}`,
        (): Promise<any> => {
            const params: {
                email: string;
            } = {
                email: info.email,
            }

            const apiUrl = `${config.public.apiDomainUrl}${config.public.apiBasePath}/reminder`;
            const response = $fetch(apiUrl, { method: "POST", body: params})
            return response;
        }
    );

    return asyncData;
};