export default (message: string, statusCode: number, fatal = true) => {
  if (process.client) {
    throw showError({ statusMessage: message, statusCode, fatal });
  } else {
    throw createError({ message, statusCode, fatal });
  }
};
