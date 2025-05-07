<script setup lang="ts">
import type {ResetPasswordInfo} from "~/interfaces/auth"
import type {ErrorMessage} from "~/interfaces/error"

const resetPasswordInfo : ResetPasswordInfo = reactive (
    {
        login_id: "",
        current_password: "",
        new_passwaord: ""
    }
);
const errorMessage: ErrorMessage= reactive (
    {
        statusCode: "",
        statusMessage: ""
    }
);

const responseError = ref("");

const onResetPassword = async (): void => {
    const response = await useResetPassword(resetPasswordInfo);

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
        <form v-on:submit.prevent="onResetPassword">
            <h3>パスワード再設定</h3>
            <dl>
                <dt>
                    <label for="email">メールアドレス&nbsp;</label>
                </dt>
                <dd>
                    <input type="text" id="email" v-model="resetPasswordInfo.login_id" required>
                </dd>
                <dt>
                    <label for="current_password">現在のパスワード&nbsp;</label>
                </dt>
                <dd>
                    <input type="text" id="current_password" v-model="resetPasswordInfo.current_password" required>
                </dd>
                <dt>
                    <label for="new_password">新しいパスワード&nbsp;</label>
                </dt>
                <dd>
                    <input type="text" id="new_password" v-model="resetPasswordInfo.new_password" required>
                </dd>

            </dl>

            <button type="submit">パスワード再設定</button>
            <p>{{errorMessage.statusCode}}</p>
            <p>{{errorMessage.statusMessage}}</p>

        </form>
    </section>
</template>