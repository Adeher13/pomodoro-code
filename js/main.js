const segundosPomodoro =4000   //Estamos usando 4 segundos para testes.
const disparador = document.querySelector('#disparador')

disparador.addEventListener('click', () =>{
   console.log("disparador ativado.")

   // Criando o cronometro
   setTimeout(() => {
   console.log("Acabou o pomodoro!");
   alert("O seu tempo  de produção do pomodoro acabou. Vá descansar!")
},4000 );
})


