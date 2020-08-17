# What is this to for?

I use this for twen discord bot to access the</br>
• Points</br>
• Prefixes</br>

# Installation

`npm i twen.js --save`

OR you can download the repository to use it
But I recommend to use that npm package

# For example to use it

```js
const twen = require("twen.js");
//key is only available for support or owner to access it

const key = "Like i said";
const ID = "Discord User ID";
const guildID = "Discord Server ID";
const defpre = "To use as Default of Prefix Bot";

twen.points (ID, key).then (console.log);

/*Output:
{ user: { points: 12948, level: 10, isLevelUp: false }, status: "OK"}
*/

twen.prefixes (ID, defpre, key).then (console.log);

/*Output:
{ guild: { prefix: "t.", isChange: false }, status: "OK"}
*/

let num = twen.generate(); //this function to make a random number
console.log(num);

/*Output:
9
*/
```

# Important

This is not for you want to use.. 
Because u didnt get the key to access it..
Only can use:</br>
• Owner</br>
• Support</br>
