const { sendMail } = require("./sendgrid-service");
exports.sendVerificationEmail = async (email, verificationLink) => {
  try {
    const message = {
      to: `${email}`,
      from: {
        name: "XYZ",
        // registered sender's email address
        email: "verification@xyz.com",
      },

      // Specify verification email templateId from Sendgrid email templates
      templateId: "d-57149f0c2e0b4452918c3bafd82592fa",
      dynamic_template_data: {
        // Here link is a button property in the email template
        link: `${verificationLink}`,
      },
      subject: "Verify Your Email or Verify Your Account",
    };
    const emailStatus = await sendMail(message);
    return Promise.resolve(emailStatus);
  } catch (err) {
    return Promise.reject(err);
  }
};

/**
 * We can also create other email transporting services
 * Such as sendMarketingEmail, sendNoReplyEmail, sendReminderEmail etc...
 */
