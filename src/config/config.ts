const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "localhost:3306",
      user: "root",
      password: "",
      database: "express-backend",
      connectTimeout: 60000
    },
    listPerPage: 10,
  };


export default config;