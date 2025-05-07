<script setup lang="ts">
import type {MasterInfo} from "@/interfaces/table"
import type {ErrorMessage} from "~/interfaces/error"

const errorMessage: ErrorMessage= reactive (
    {
        statusCode: "",
        statusMessage: ""
    }
);
const responseError = ref("");
const config = useRuntimeConfig();

interface Props {
    cvtable_id: string;
}

const props = defineProps<Props>();


const masterList = reactive (new Map<number, MasterInfo>());
onMounted (
    async (): void => {
        const response = await useGetMasterList(props.cvtable_id);

        errorMessage.statusCode = "";
        errorMessage.statusMessage = "";
        responseError.value = response.error.value;
        if (responseError.value != null) {
            errorMessage.statusCode = responseError.value.data.errors[0].code;
            errorMessage.statusMessage = responseError.value.data.errors[0].message;
        }
        else {
            const dataList = response.data.value.list;
            for (let i:number = 0; i < dataList.length; i++) {
                if (i > 0) {
                    let info:MasterInfo = {title: dataList[i][0], value: dataList[i][1]};
                    masterList.set(info.title, info);
                }
            }
        }
    }
);


const selectedMasterInfo = ref("");
</script>

<template>
    <select v-model="selectedValue">
        <option v-for="[id, masterInfo] in masterList" :value="masterInfo.title">
            {{ masterInfo.value }}
        </option>
    </select>
</template>