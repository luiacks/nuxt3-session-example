<template>
  <p>ログイン後に表示されるページです。</p>
  <pre>{{ user }}</pre>
  <button @click="logout()">ログアウト</button>
</template>

<script setup>
definePageMeta({
  middleware: [
    async function (to, from) {
      if (!useAuth().session.value) {
        return navigateTo("/login");
      }
    },
  ],
});

// ユーザー情報
const { data: user, refresh: refreshUser } = useFetch("/api/user/me");

// ログアウト
async function logout() {
  await useAuth().logout();
  useRouter().push("/login");
}
</script>

<style scoped>
button {
  margin-bottom: 16px;
  display: block;
}
</style>
