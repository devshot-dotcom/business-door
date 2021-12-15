// ENV variables.
const email = process.env.REACT_APP_EMAIL;
const databaseUrl = process.env.REACT_APP_SUPABASE_URL;
const databasePublicKey = process.env.REACT_APP_SUPABASE_ANON;

// Props.
const patterns = {
  EMAIL:
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  PASSWORD: /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  LOWERCASE: /(?=.*[a-z])/,
  UPPERCASE: /(?=.*[A-Z])/,
  NUMBERS: /(?=.*\d)/,
  NUMBERS_ONLY: /^\d+$/,
};

export { patterns, email, databaseUrl, databasePublicKey };
