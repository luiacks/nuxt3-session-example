export default eventHandler(async (event) => {
  // 未ログイン時はエラーを返す
  if (!event.context.session.data.userId) {
    throw createError({
      statusCode: 403,
    });
  }

  return { status: "OK" };
});
