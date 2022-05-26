const env = {
  app: {
    NAME: "Business Door",
    version: {
      NAME: "Beta@1.0.0",
      CODE: 1,
    },
  },
  author: {
    site: {
      NAME: "Devshot",
      URL: "https://devshot-dotcom.github.io/",
    },
    EMAIL: "devshot.coffee@gmail.com",
  },
  database: {
    URL: process.env.REACT_APP_DATABASE_URL,
    KEY: process.env.REACT_APP_DATABASE_KEY,
  },
};

export default env;
