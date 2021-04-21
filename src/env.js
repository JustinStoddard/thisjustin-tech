export const getEnvVar = (key) => {
  const value = process.env[key];
  if (value || value !== undefined) {
    return value
  } else {
    throw new Error("Couldn't Load Env Var");
  }
};