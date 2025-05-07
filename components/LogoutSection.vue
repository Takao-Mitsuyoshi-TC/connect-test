<script setup lang="ts">
import type {ErrorMessage} from "~/interfaces/error"

const errorMessage: ErrorMessage= reactive (
    {
        statusCode: "",
        statusMessage: ""
    }
);

const responseError = ref("");

const onLogout = async (): void => {
    const response = await useLogout();

    errorMessage.statusCode = "";
    errorMessage.statusMessage = "";
    responseError.value = response.error.value;
    if (responseError.value != null) {
        errorMessage.statusCode = responseError.value.data.errors[0].code;
        errorMessage.statusMessage = responseError.value.data.errors[0].message;
    }
};
</script>

<template>
    <section>
        <form v-on:submit.prevent="onLogout">
            <h3>ログアウト</h3>
            <button type="submit">ログアウト</button>
            <p>{{errorMessage.statusCode}}</p>
            <p>{{errorMessage.statusMessage}}</p>

        </form>
    </section>
</template>