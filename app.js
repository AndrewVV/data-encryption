let CryptoJS = require("crypto-js");
let messege = "Some private text";
let passsword = "very strong password";
let ciphertextExample = "U2FsdGVkX18zS2emNE17OBd4kWuiGIEA1JrOd9Tnn6k/hOr8NbOJtu5+P9MC1gUC";

class Cipher {
    constructor(){
        // test method
        this.encryptSomething(messege, passsword);
        this.decryptSomething(ciphertextExample, passsword);
        this.sha256(messege)
    }

    encryptSomething(data, password) {
        return new Promise(async(resolve, reject)=>{
            try{
                let ciphertext = CryptoJS.AES.encrypt(data, password);
                ciphertext = ciphertext.toString();
                console.log(ciphertext)
                return resolve(ciphertext)
            }catch(e){
                return reject(e)
            }
        })
    }
    
    decryptSomething(ciphertext, password) {
        return new Promise(async(resolve, reject)=>{
            try{
                let bytes = CryptoJS.AES.decrypt(ciphertext, password);
                let plaintext = bytes.toString(CryptoJS.enc.Utf8);
                console.log(plaintext)
                if (plaintext.length === 0){
                    console.log('Wrong password')
                }
                return resolve(plaintext);
            }catch(e){
                return reject(e);
            }
        });
    }

    sha256(data) {
        return new Promise(async(resolve, reject)=>{
            try{
                let ciphertext = CryptoJS.SHA256(data);
                ciphertext = ciphertext.toString();
                console.log(ciphertext)
                return resolve(ciphertext)
            }catch(e){
                return reject(e)
            }
        })
    }
}

let cipher = new Cipher()