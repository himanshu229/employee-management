// next-i18next.config.js
const { i18n } = require("next-i18next");

module.exports = {
  i18n,
  defaultLocale: "en",
  locales: ["en", "ms"], // Add more locales as needed
  localeDetection: false, // Set to true if you want to automatically detect the user's locale
};
