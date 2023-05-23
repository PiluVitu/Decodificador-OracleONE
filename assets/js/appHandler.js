import {outputBox,labelBox,result,copyButton} from './domElements.js'

export default class AppHandler {
  toggleDivClass(){
    outputBox.classList.toggle('hidden')
    labelBox.classList.toggle('hidden')
  }
  
  copy(){
    navigator.clipboard.writeText(result.innerHTML).then(() => {
     copyButton.textContent = 'Copiado !'
    }).catch((error) => {
      alert("Erro ao copiar o texto", error)
    })
  }
}