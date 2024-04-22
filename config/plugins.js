module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: env("DEFAULT_EMAIL", "no-reply@strapi.io"),
        defaultReplyTo: env("DEFAULT_EMAIL", "no-reply@strapi.io"),
      },
    },
  },
});
