<script setup lang="ts">
import type {TopicsInfo} from "~/interfaces/contents"
import type {ErrorMessage} from "~/interfaces/error"

const errorMessage: ErrorMessage= reactive (
    {
        statusCode: "",
        statusMessage: ""
    }
);
const topicsList = reactive (new Map<number, TopicsInfo>());
const responseError = ref("");
const route = useRoute();

const content_type = ref("");
onMounted(
    async (): void => {
        const response = await useGetTopicsList();

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
                if (i == 0) {
                    content_type.value = dataList[i].contents_type_nm;
                }
                let info:TopicsInfo = {topics_id: dataList[i].topics_id, subject: dataList[i].subject, contents_type_nm:dataList[i].contents_type_nm, thumbnail: dataList[i].ext_2};
                topicsList.set(info.topics_id, info);
            }
        }
    }
);


</script>

<template>
    <section>
        <h3>{{ content_type }}</h3>
        <li v-for="[id, topicsInfo] in topicsList" v-bind:key="id">
            {{ id }}
            {{ topicsInfo.subject }}
            <div>
                <img :src="`${topicsInfo.thumbnail.url_org}`" :width="200" :height="200">
            </div>
        </li>
    </section>
</template>