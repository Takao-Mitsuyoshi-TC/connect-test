<script setup lang="ts">
import type {TopicsCategoryInfo} from "~/interfaces/contents"
import type {ErrorMessage} from "~/interfaces/error"

const errorMessage: ErrorMessage= reactive (
    {
        statusCode: "",
        statusMessage: ""
    }
);
const categoryList = reactive (new Map<number, TopicsCategoryInfo>());
const responseError = ref("");
const route = useRoute();
onMounted(
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
                let info:TopicsCategoryInfo = {topics_category_id: dataList[i].topics_category_id, category_nm: dataList[i].category_nm};
                categoryList.set(info.topics_category_id, info);
            }
        }
    }
);


</script>

<template>
    <section>
        <h3>カテゴリ</h3>
        <li v-for="[id, topicsCategoryInfo] in categoryList" v-bind:key="id">
            {{ id }}
            <NuxtLink v-bind:to="{name: `topics-category_id-id`, params: {category_id:route.params.id ,id: id}}">{{ topicsCategoryInfo.category_nm }}</NuxtLink>
        </li>
    </section>
</template>