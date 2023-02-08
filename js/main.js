const segundosPomodoro =4000//25*60*1000
const disparador = document.querySelector('#disparador')

disparador.addEventListener('click', () =>{
   console.log("disparador ativado.")
   setTimeout(() => {
   console.log("Acabou o pomodoro!") 
},4000 );
})


