import { User } from "~/server/models/user";

export default eventHandler(async (event) => {
  const body = await readBody(event);

  // バリデーション
  if (
    typeof body.email !== "string" ||
    typeof body.password !== "string" ||
    typeof body.name !== "string"
  ) {
    throw createError({
      statusCode: 401,
    });
  }

  // ユーザー作成
  let user;
  try {
    user = await User.create({
      email: body.email,
      password: body.password,
      name: body.name,
    });
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
    });
  }

  // セッション開始
  await event.context.session.update({
    userId: user.id,
  });

  return { status: "OK" };
});
