const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(SENDGRID_API_KEY);
exports.sendMail = async (message) => {
  try {
    sgMail.send(message).then(() => {
      return Promise.resolve("Email has been sent");
    });
  } catch (err) {
    return Promise.reject(err);
  }
};
