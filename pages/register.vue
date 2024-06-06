<template>
  <p>登録ページです。</p>
  <form autocomplete="off" @submit.prevent="register()">
    <div>
      <span>メールアドレス: </span>
      <input v-model="formData.email" type="email" autofocus />
    </div>
    <div>
      <span>パスワード: </span>
      <input v-model="formData.password" type="password" />
    </div>
    <div>
      <span>名前: </span>
      <input v-model="formData.name" type="text" />
    </div>
    <button>登録</button>
  </form>
</template>

<script setup>
const formData = ref({
  email: "",
  password: "",
  name: "",
});

// 登録
async function register() {
  await useAuth().register(formData.value);
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
