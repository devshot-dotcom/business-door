export const env = {
  APP: {
    NAME: "Business Door",
    VERSION: {
      NAME: "1.0",
      CODE: 1,
    },
  },
  AUTHOR: {
    SITE: {
      NAME: "Devshot Dotcom",
      URL: "https://devshot-dotcom.github.io/",
    },
    EMAIL: "devshot.coffee@gmail.com",
  },
  DATABASE: {
    URL: process.env.REACT_APP_DATABASE_URL,
    KEY: process.env.REACT_APP_DATABASE_KEY,
  },
};
