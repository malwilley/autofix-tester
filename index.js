const Sentry = require("@sentry/node");

Sentry.init({
  dsn: "https://e2562af65eb9c8d6abd5f2ab40168f33@o1301306.ingest.us.sentry.io/4507274260119552",
});

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getUppercaseName() {
    return this.getFullName().toUpperCase();
  }
}

function run() {
  const user = new User('John', 'Doe');
  console.log(user.getFullName()); // John Doe
  console.log(user.getUppercaseName()); // JOHN DOE
}

try {
  run();
} catch (e) {
  console.error(e);
  Sentry.captureException(e);
}
