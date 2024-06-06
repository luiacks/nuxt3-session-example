<template>
  <div class="nav">
    <NuxtLink to="/">トップ</NuxtLink>
    <NuxtLink to="/login">ログイン</NuxtLink>
    <NuxtLink to="/register">登録</NuxtLink>
    <div class="spacer" />
    <div>認証状態: {{ session ? "済" : "未" }}</div>
  </div>
  <NuxtPage />
</template>

<script setup>
const { session } = useAuth();
</script>

<style scoped>
.nav {
  padding-bottom: 8px;
  border-bottom: solid 1px #999;
  margin-bottom: 16px;
  display: flex;
  gap: 8px;
}

.nav .spacer {
  flex-grow: 1;
}
</style>
