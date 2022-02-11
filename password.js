const { allowedNodeEnvironmentFlags } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please input user password  ", function (answer) {
    if (answer.length < 10) {
        console.log("Password too short. Please try again")
    } else{
        console.log('Password validated.')
    }
}
);
// I am not sure how to fix the issue of having to re run the terminal to get it to complete again. I believe it may 
// be a read me issue, as it continues to let you type afterwards, and press enter withut trying to run anything (ex. i think it still belives we are going to input, so it stays in that mode.)

