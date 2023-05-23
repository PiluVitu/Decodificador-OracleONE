import {cryptCode as crypt} from './cryptCode.js'
import { alert } from './alertModal.js'
import {input, output} from './domElements.js'
import AppHandler from './appHandler.js'

const appHandler = new AppHandler()

export default class CryptHandler {

  criptografar() {

    if(!input.value) {
      return alert('Insira um texto para criptografar')
    }
    if(!output.innerHTML) {
      appHandler.toggleDivClass()
    }
    const cryptArray = []
  
    const inputArray = input.value.split('')
    inputArray.map((caractere) => {
  
      let encryptCaractere
  
      caractere.includes(crypt.a[0]) ? encryptCaractere = crypt.a[1] : caractere
      caractere.includes(crypt.e[0]) ? encryptCaractere = crypt.e[1] : caractere
      caractere.includes(crypt.i[0]) ? encryptCaractere = crypt.i[1] : caractere
      caractere.includes(crypt.o[0]) ? encryptCaractere = crypt.o[1] : caractere
      caractere.includes(crypt.u[0]) ? encryptCaractere = crypt.u[1] : caractere
      
      cryptArray.push(!encryptCaractere ? caractere : encryptCaractere)
    })
  
    const cryptResult = cryptArray.join('')
  
    return output.innerHTML = cryptResult
  }
  
  descriptografar(){
    if(!input.value) {
      return alert('Insira um texto para descriptografar')
    }
    if(!output.innerHTML) {
      appHandler.toggleDivClass()
    }
  
    const arrayEncryptWords = input.value.split(' ')
    const decryptArray = []
  
    arrayEncryptWords.map( word => {
    
      
      let decryptWord = word
  
      while (decryptWord.includes(crypt.a[1])) {
        decryptWord = decryptWord.replace(crypt.a[1], crypt.a[0])
      }
      while(decryptWord.includes(crypt.e[1])) {
        decryptWord = decryptWord.replace(crypt.e[1], crypt.e[0])
      }
      while(decryptWord.includes(crypt.i[1])){
  
        decryptWord = decryptWord.replace(crypt.i[1], crypt.i[0])
      }
      while(decryptWord.includes(crypt.o[1])){
  
        decryptWord = decryptWord.replace(crypt.o[1], crypt.o[0])
      }
      while(decryptWord.includes(crypt.u[1])){
  
        decryptWord = decryptWord.replace(crypt.u[1], crypt.u[0])
      }
      
      decryptArray.push(decryptWord)
    })
    output.innerHTML = decryptArray.join(' ')
  }
}