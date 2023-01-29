const { sendVerificationEmail } = require("./services/email-transport-service");

sendVerificationEmail("user@abc.com", "https://www.google.com")
  .then((emailStatus) => {
    console.log(emailStatus);
  })
  .catch((err) => {
    console.log(err);
  });
