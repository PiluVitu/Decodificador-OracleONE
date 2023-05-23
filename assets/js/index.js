import { criptoButton, decryptButton, copyButton} from './domElements.js'
import AppHandler from './appHandler.js'
import CryptHandler from './cryptHandler.js'

const appHandler = new AppHandler()
const cryptHandler = new CryptHandler()

criptoButton.addEventListener('click',  cryptHandler.criptografar)

decryptButton.addEventListener('click', cryptHandler.descriptografar)

copyButton.addEventListener('click', appHandler.copy)
