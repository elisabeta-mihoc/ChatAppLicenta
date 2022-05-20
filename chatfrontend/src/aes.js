var aes256 = require("aes256");
//the secret key used for encrypting and decrypting messages
var secret_key = "uI2ooxtwHeI6q69PS98fx9SWVGbpQohO";

// export const generateRandomAESKey = () => {
//   var key = "";
//   var possible =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for (var i = 0; i < 32; i++)
//     key += possible.charAt(Math.floor(Math.random() * possible.length));

//   return key;
// };
//returns the encrypted text
export const to_Encrypt = (text) => {
  var encrypted = aes256.encrypt(secret_key, text);
  return encrypted;
};
//welcome message is not decrypted
export const to_Decrypt = (cipher, username) => {
  if (cipher.startsWith("Welcome")) {
    return cipher;
  }

  if (cipher.startsWith(username)) {
    return cipher;
  }
  //extrag ultimii nu stiu cati bytes din cipher, asta e {K}_RSA

  //decriptez, K =  RSA.decrypt({K}_RSA, privateKey)

  //decryped message is returned
  var decrypted = aes256.decrypt(secret_key, cipher);
  return decrypted;
};

//we imported aes256 from the aes module and wrote the functions where the incoming encrypted message is decrypted and outgoing message is encrypted.
