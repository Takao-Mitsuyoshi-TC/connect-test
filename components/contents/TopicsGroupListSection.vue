<script setup lang="ts">
import type {TopicsGroupInfo} from "@interfaces/contents"
import type {ErrorMessage} from "~/interfaces/error"

const errorMessage: ErrorMessage= reactive (
    {
        statusCode: "",
        statusMessage: ""
    }
);

const initInfo:TopicsGroupInfo = {topics_group_id: 0, group_nm: ""};

const topicsGroupList = reactive(new Map<number, TopicsGroupInfo>());
const responseError = ref("");

const onGetList = async (): void => {
    const response = await useGetTopicsGroupList();

    errorMessage.statusCode = "";
    errorMessage.statusMessage = "";
    responseError.value = response.error.value;
    if (responseError.value != null) {
        errorMessage.statusCode = responseError.value.data.errors[0].code;
        errorMessage.statusMessage = responseError.value.data.errors[0].message;
    }
    else {
        let dataList = response.data.value.list;
        for (let i:number = 0; i < dataList.length; i++) {
            let info:TopicsGroupInfo = {topics_group_id: dataList[i].topics_group_id, group_nm: dataList[i].group_nm};
            topicsGroupList.set(info.topics_group_id, info);
        }
    }
};
</script>

<template>
    <section>
        <form v-on:submit.prevent="onGetList">
            <h3>コンテンツ</h3>
            <button type="submit">コンテンツ</button>
            <li v-for="[id, topicsGroupInfo] in topicsGroupList" v-bind:key="id">
               {{ id }}
               <NuxtLink v-bind:to="{name: `topics-id`, params: {id: id}}">{{ topicsGroupInfo.group_nm }}</NuxtLink>
            </li>

        </form>
    </section>
</template>