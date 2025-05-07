<template>
    <h2><NuxtLink v-bind:to="{name: `contents`}">コンテンツ</NuxtLink> > <NuxtLink v-bind:to="{name: `topics-list`}">コンテンツ一覧</NuxtLink> > カテゴリ</h2>
    <ContentsTopicsCategoryListSection/>
</template>
