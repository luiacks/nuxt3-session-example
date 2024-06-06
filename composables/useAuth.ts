export function useAuth() {
  const session = useState("authSession", () => false);

  // ログイン
  async function login(body: { email: string; password: string }) {
    await $fetch("/api/auth/login", { method: "POST", body });
    session.value = true;
  }

  // ログアウト
  async function logout() {
    await $fetch("/api/auth/logout", { method: "POST" });
    session.value = false;
  }

  // セッションの取得
  async function getSession() {
    const { error } = await useFetch("/api/auth/session");
    session.value = !error.value;
  }

  // 登録
  async function register(body: any) {
    await $fetch("/api/auth/register", { method: "POST", body });
    session.value = true;
  }

  return {
    session,
    login,
    logout,
    getSession,
    register,
  };
}
