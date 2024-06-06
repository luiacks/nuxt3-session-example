<template>
  <p>ログインページです。</p>
  <form autocomplete="off" @submit.prevent="login()">
    <div>
      <span>メールアドレス: </span>
      <input v-model="formData.email" type="email" autofocus />
    </div>
    <div>
      <span>パスワード: </span>
      <input v-model="formData.password" type="password" />
    </div>
    <button>ログイン</button>
  </form>
</template>

<script setup>
const formData = ref({
  email: "",
  password: "",
});

// ログイン
async function login() {
  await useAuth().login(formData.value);
  useRouter().push("/");
}
</script>

<style scoped>
form {
  display: grid;
  gap: 8px;
  justify-items: flex-start;
}
</style>
