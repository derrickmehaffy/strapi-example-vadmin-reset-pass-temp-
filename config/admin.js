module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
  forgotPassword: {
    emailTemplate: {
      subject: "This is a test",
      html: "<p>This is a test of html</p>",
      text: "This is a test of text",
    },
    from: env("DEFAULT_EMAIL", "no-reply@strapi.io"),
    replyTo: env("DEFAULT_EMAIL", "no-reply@strapi.io"),
  },
});
