<template>
    <section>
        <h2><NuxtLink v-bind:to="{name: `index`}">認証</NuxtLink>&nbsp;<NuxtLink v-bind:to="{name: `member`}">メンバー</NuxtLink>&nbsp;コンテンツ</h2>
        <div><NuxtLink v-bind:to="{name: `topics-insert`}">コンテンツ投稿</NuxtLink></div>
        <div><NuxtLink v-bind:to="{name: `topics-list`}">コンテンツ一覧</NuxtLink></div>
    </section>
</template>