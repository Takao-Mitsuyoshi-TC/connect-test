<template>
    <section>
        <h2>認証&nbsp;<NuxtLink v-bind:to="{name: `member`}">メンバー</NuxtLink>&nbsp;<NuxtLink v-bind:to="{name: `contents`}">コンテンツ</NuxtLink>&nbsp;</h2>
        <LoginSection/>
        <LogoutSection/>
        <ReminderSection/>
        <ResetPasswordSection/>

    </section>
</template>