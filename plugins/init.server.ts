export default defineNuxtPlugin(async () => {
  // セッションの取得
  await useAuth().getSession();
});
