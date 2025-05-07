<template>
    <section>
        <h2><NuxtLink v-bind:to="{name: `index`}">認証</NuxtLink>&nbsp;メンバー&nbsp;<NuxtLink v-bind:to="{name: `contents`}">コンテンツ</NuxtLink></h2>
        <MemberInsertSection/>
    </section>
</template>