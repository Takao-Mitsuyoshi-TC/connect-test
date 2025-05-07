<script setup lang="ts">
import type {UserInfo} from "~/interfaces/user";
import type {LoginInfo} from "~/interfaces/auth"
import type {ErrorMessage} from "~/interfaces/error"

const loginInfo : LoginInfo = reactive (
    {
        email: "",
        password: ""
    }
);
const errorMessage: ErrorMessage= reactive (
    {
        statusCode: "",
        statusMessage: ""
    }
);

const responseError = ref("");


const onLogin = async (): void => {
    const response = await useLogin(loginInfo);

    errorMessage.statusCode = "";
    errorMessage.statusMessage = "";
    responseError.value = response.error.value;
    if (responseError.value != null) {
        errorMessage.statusCode = responseError.value.data.errors[0].code;
        errorMessage.statusMessage = responseError.value.data.errors[0].message;
    }
    else
    {
        reactive(useState<UserInfo> (
            'loginUser',
            () => {
                let userInfo: UserInfo = {
                    grant_token: response.data.value.grant_token,
                    member_id: response.data.value.member_id
                };

                return userInfo;
            }
        )
        );
    }
};
</script>

<template>
    <section>
        <form v-on:submit.prevent="onLogin">
            <h3>ログイン</h3>
            <dl>
                <dt>
                    <label for="loginEmail">メールアドレス&nbsp;</label>
                </dt>
                <dd>
                    <input type="text" id="loginEmail" v-model="loginInfo.email" required>
                </dd>
                <dt>
                    <label for="loginPassWord">パスワード&nbsp;</label>
                </dt>
                <dd>
                    <input type="text" id="loginPassWord" v-model="loginInfo.password" required>
                </dd>

            </dl>
            <button type="submit">ログイン</button>
            <p>{{errorMessage.statusCode}}</p>
            <p>{{errorMessage.statusMessage}}</p>

        </form>
    </section>
</template>