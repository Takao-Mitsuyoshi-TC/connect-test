<script setup lang="ts">
import type {InsertInfo} from "~/interfaces/member"
import type {ErrorMessage} from "~/interfaces/error"

const insertInfo : InsertInfo = reactive (
    {
        name1: "",
        name2: "",
        email: "",
        login_pwd: "",
        tel: "",
        department: "",
        position: "",
        login_ok_flg: ""
    }
);
const errorMessage: ErrorMessage= reactive (
    {
        statusCode: "",
        statusMessage: ""
    }
);

const responseError = ref("");

const onInsert = async (): void => {
    const response = await useInsert(insertInfo);

    errorMessage.statusCode = "";
    errorMessage.statusMessage = "";
    responseError.value = response.error.value;
    if (responseError.value != null) {
        console.log(response);
        
        errorMessage.statusCode = responseError.value.data.errors[0].code;
        errorMessage.statusMessage = responseError.value.data.errors[0].message;
    }
};
</script>

<template>
    <section>
        <form v-on:submit.prevent="onInsert">
            <h3>メンバー登録</h3>
            <dl>
                <dt>
                    <label for="name1">姓&nbsp;</label>
                </dt>
                <dd>
                    <input type="text" id="name1" v-model="insertInfo.name1" required>
                </dd>
                <dt>
                    <label for="name2">名&nbsp;</label>
                </dt>
                <dd>
                    <input type="text" id="name2" v-model="insertInfo.name2" required>
                </dd>
                <dt>
                    <label for="email">メールアドレス&nbsp;</label>
                </dt>
                <dd>
                    <input type="text" id="email" v-model="insertInfo.email" required>
                </dd>
                <dt>
                    <label for="login_pwd">パスワード&nbsp;</label>
                </dt>
                <dd>
                    <input type="text" id="login_pwd" v-model="insertInfo.login_pwd" required>
                </dd>
                <dt>
                    <label for="tel">電話番号&nbsp;</label>
                </dt>
                <dd>
                    <input type="text" id="tel" v-model="insertInfo.tel">
                </dd>
                <dt>
                    <label for="department">所属&nbsp;</label>
                </dt>
                <dd>
                    <input type="text" id="department" v-model="insertInfo.department">
                </dd>
                <dt>
                    <label for="position">役職&nbsp;</label>
                </dt>
                <dd>
                    <input type="text" id="position" v-model="insertInfo.position">
                </dd>
            </dl>
            <button type="submit">登録</button>
            <p>{{errorMessage.statusCode}}</p>
            <p>{{errorMessage.statusMessage}}</p>

        </form>
    </section>
</template>