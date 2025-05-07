<script setup lang="ts">
import type {ReminderInfo} from "~/interfaces/auth"
import type {ErrorMessage} from "~/interfaces/error"

const reminderInfo : ReminderInfo = reactive (
    {
        email: ""
    }
);
const errorMessage: ErrorMessage= reactive (
    {
        statusCode: "",
        statusMessage: ""
    }
);

const responseError = ref("");

const onReminder = async (): void => {
    const response = await useReminder(reminderInfo);

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
        <form v-on:submit.prevent="onReminder">
            <h3>パスワード再設定(パスワード忘れ)</h3>
            <dl>
                <dt>
                    <label for="loginEmail">メールアドレス&nbsp;</label>
                </dt>
                <dd>
                    <input type="text" id="loginEmail" v-model="reminderInfo.email" required>
                </dd>

            </dl>

            <button type="submit">パスワード再設定</button>
            <p>{{errorMessage.statusCode}}</p>
            <p>{{errorMessage.statusMessage}}</p>

        </form>
    </section>
</template>