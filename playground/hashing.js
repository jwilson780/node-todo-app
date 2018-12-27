const { SHA256 } = require("crypto-js");
const jwt = require("jsonwebtoken");

let message = "I am user number 3";
let hash = SHA256(message).toString();

console.log("This is a message: ", message);
console.log("This is a hased message: ", hash);

let data = {
  id: 4
};

let token = {
  data,
  hash: SHA256(JSON.stringify(data) + "somesecret").toString()
};

var resultHash = SHA256(JSON.stringify(token.data) + "somesecret").toString();

if (resultHash === token.hash) {
  console.log("Data was not changed");
} else {
  console.log("Data was changed, dont trust");
}

//with JSON webtokens you can just call the token and verify it

let dataJWT = {
  id: 10
};

let tokenJWT = jwt.sign(dataJWT, "123abc");

console.log(tokenJWT);

let decoded = jwt.verify(tokenJWT, "123abc");

console.log("decoded: ", decoded);
