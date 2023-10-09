function setAlarm() {
    setTimeout(() => {
        console.log('Wake up!')
    }, 1000);
}
// setAlarm() starts a timer, then logs "Wake up!"

function alarm(person, delay) {
    return new Promise((resolve, reject) => {
      if (delay < 0) {
        throw new Error("Alarm delay must not be negative");
      }
      setTimeout(() => {
        resolve(`Wake up, ${person}!`);
      }, delay);
    });
  }
// alarm() will return a Promise that is fulfilled when the timer expires.

function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age < 21) {
            throw new Error("You cannot come in .")
        }
        setTimeout(() => {
            resolve(`You are ${age}, which is over 21, so you can come in.`)
        }, 1000);
    })
}

setAlarm()

alarm('Chazz', 1000)
checkAge(22)