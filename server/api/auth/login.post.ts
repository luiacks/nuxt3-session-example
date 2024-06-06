import { User } from "~/server/models/user";

export default eventHandler(async (event) => {
  const body = await readBody(event);

  // バリデーション
  if (typeof body.email !== "string" || typeof body.password !== "string") {
    throw createError({
      statusCode: 401,
    });
  }

  // ユーザー検索
  let user;
  try {
    user = await User.findOne({ email: body.email }).select("+password");
  } catch (error) {
    throw createError({
      statusCode: 401,
    });
  }

  if (!user) {
    throw createError({
      statusCode: 404,
    });
  }

  // パスワード検証
  if (!user.verifyPassword(body.password)) {
    throw createError({
      statusCode: 401,
    });
  }

  // セッション開始
  await event.context.session.update({
    userId: user.id,
  });

  return { status: "OK" };
});
