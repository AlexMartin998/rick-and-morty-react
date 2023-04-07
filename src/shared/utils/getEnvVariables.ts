export const getEnvVariables = () => ({
  VITE_STAGE: import.meta.env.VITE_MODE || 'dev',
  VITE_API_URL: import.meta.env.VITE_API_URL,
});
