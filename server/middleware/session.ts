// セッションの型
type sessionDataType = {
  userId?: string;
};

// 型の拡張
declare module "h3" {
  interface H3EventContext {
    session: {
      readonly id: string | undefined;
      readonly data: sessionDataType;
      update: (update: sessionDataType) => Promise<sessionDataType>;
      clear: () => Promise<any>;
    };
  }
}

// contextにセッションを追加
export default eventHandler(async (event) => {
  event.context.session = await useSession(event, {
    // パスワード(最小32文字)
    password: process.env.NUXT_SESSION_PASSWORD || "",
    cookie: {
      // 有効期間(24時間)
      maxAge: 60 * 60 * 24,
      secure: false,
      httpOnly: false,
    },
  });
});
