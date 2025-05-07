<script setup lang="ts">
import type {UserInfo} from "@/interfaces/user"

const userInfo = reactive(
  useState<userInfo>("loginUser")
);


</script>
<template>
  <header>
    <h1>Kuroco接続確認</h1>
  </header>
  <main>
    <NuxtPage/>
  </main>
</template>
