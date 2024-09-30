const strapi = require("@strapi/strapi");

const app = strapi.createStrapi({ distDir: "./dist" });

app.start();
