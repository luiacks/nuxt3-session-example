export default eventHandler(async (event) => {
  // セッション消去
  await event.context.session.clear();

  return { status: "OK" };
});
