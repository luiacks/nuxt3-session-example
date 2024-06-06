import { User } from "~/server/models/user";

export default eventHandler(async (event) => {
  // 未ログイン状態
  if (!event.context.session.data.userId) {
    throw createError({
      statusCode: 403,
    });
  }

  // ユーザー検索
  let user;
  try {
    user = await User.findOne({ _id: event.context.session.data.userId });
  } catch (error) {
    throw createError({
      statusCode: 500,
    });
  }

  if (!user) {
    throw createError({
      statusCode: 404,
    });
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name,
  };
});
