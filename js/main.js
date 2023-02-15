const milissegundosPomodoro = 4000   //Estamos usando 4 segundos para testes.
const milissegundosIntervalo = 4000 //intervalo de 5 minutos é de 300000 milissegundos
const disparador = document.querySelector('#disparador')
const cronometro = document.querySelector('#cronometro')
const historico = document.querySelector('#historico')
let milissegundosRestantes =  0
let contador
let modo = ''

disparador.addEventListener('click', () =>{
   console.log("Disparador ativado.")
   

   if (disparador.textContent == "Pausar"){
      clearInterval(contador)
      disparador.textContent = "Retomar"
   }else{
        if(disparador.textContent == "Começar"){
      modo = "pomodoro"
      milissegundosRestantes = milissegundosPomodoro - 1000
      historico.textContent = parseInt(historico.textContent)  + 1
    
   }else if(disparador.textContent =="Intervalo"){
      modo = "intervalo"
      milissegundosRestantes = milissegundosIntervalo - 1000
   }

      disparador.textContent = "Pausar"
      contador = setInterval('contadorDeSegundos()',1000);
   }


})

function contadorDeSegundos(){
   
   if (milissegundosRestantes == 0){
      
      cronometro.textContent = "00:00"
      console.log("O seu tempo  de produção do pomodoro acabou. Vá descansar!")
      
      if (modo =="pomodoro"){
         disparador.textContent = "Intervalo"
         document.querySelector ('body').style.background = "#4682B4"
         disparador.style.color = "#4682B4"
      }else if(modo=="intervalo"){
         disparador.textContent = "Começar"
         document.querySelector ('body').style.background = "#008080"
         disparador.style.color = "#008080"
      }

      clearInterval(contador)
   } else {
      cronometro.textContent = formatadorDoTempo(milissegundosRestantes/1000)
   }
 
   milissegundosRestantes -= 1000;

}

function formatadorDoTempo(tempo){
   const minutos = Math.floor(tempo / 60);
   const segundos = tempo % 60;
 return (minutos.toString().padStart(2, '0')+ ":" +segundos.toString().padStart(2,'0'))
}

