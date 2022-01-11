// ENV variables.
const versionName = process.env.REACT_APP_VERSION_NAME;
const authorEmail = process.env.REACT_APP_EMAIL;
const databaseUrl = process.env.REACT_APP_SUPABASE_URL;
const databasePublicKey = process.env.REACT_APP_SUPABASE_ANON;

export { versionName, authorEmail, databaseUrl, databasePublicKey };
