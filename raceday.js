let raceNumber = Math.floor(Math.random() * 1000);

const earlyRegister = false
const runnersAge = 10

if (earlyRegister && runnersAge > 18) {
    raceNumber += 1000;
}
 if (earlyRegister && runnersAge >18) {
     console.log(`"Your race will start at 0930. Your number will be ${raceNumber}"`)
     
} else if (runnersAge > 18 && !earlyRegister) {
      console.log(`'Your will run at 1100 your Number is ${raceNumber}'`)
}
 else if (runnersAge < 18) {
     console.log(`You will run at 1230 and you number is ${raceNumber}`)
 }
 else if (runnersAge = 18) {
    console.log(`Please see the registration counter for race number.`)
}