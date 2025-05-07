<script setup lang="ts">
import type {TopicsCategoryInfo} from "@/interfaces/contents"
import type {ErrorMessage} from "~/interfaces/error"

const errorMessage: ErrorMessage= reactive (
    {
        statusCode: "",
        statusMessage: ""
    }
);
const responseError = ref("");
const config = useRuntimeConfig();

const categoryList = reactive (new Map<number, TopicsCategoryInfo>());
onMounted (
    async (): void => {
        const response = await useGetTopicsCategoryList();

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
                    let info:TopicsCategoryInfo = {topics_category_id: dataList[i].topics_category_id, category_nm: dataList[i].category_nm};
                    categoryList.set(info.topics_category_id, info);
                }
            }
        }
    }
);


const selectedMasterInfo = ref("");
</script>

<template>
    <select v-model="selectedValue">
        <option v-for="[id, categoryInfo] in categoryList" :value="categoryInfo.topics_category_id">
            {{ categoryInfo.category_nm }}
        </option>
    </select>
</template>