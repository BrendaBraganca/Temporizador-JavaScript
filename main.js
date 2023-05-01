const botaoIniciar = document.getElementById('botao-iniciar');

const temporizador = (duracao, relogio) => {
    let timer = duracao;
    let horas, minutos, segundos;

    let intervalo =setInterval(() => {
        horas = Math.floor(timer/(60 * 60));
        minutos = Math.floor(timer/(60) - horas * 60); // SE FOREM 121 MINUTOS , VAI FICAR 2H E 1MIN
        segundos = Math.floor(timer % 60); //"%" representa o resto de uma divisao

        horas = horas < 10 ? '0' + horas : horas;
        minutos = minutos < 10 ? '0' + minutos : minutos;
        segundos = segundos < 10 ? '0' + segundos : segundos;

        relogio.innerHTML = `${horas}:${minutos}:${segundos}`

        timer -= 1;
        console.log(timer)
        if(timer <= 0){
            relogio.innerHTML = 'break';
            clearInterval(intervalo);
        }

    }, 1000) //MILISSEGUNDOS
} 

botaoIniciar.addEventListener('click', () => {
    const horas = document.getElementById('hora');
    const minutos = document.getElementById('minuto');
    const segundos = document.getElementById('segundo');

    let duracao = (parseInt(horas.value) * 60 * 60) + (parseInt(minutos.value) * 60) + parseInt(segundos.value); // ESTA CONVERTENDO TUDO PARA SEGUNDOS

    relogio = document.getElementById('timer');
    temporizador(duracao, relogio);
})
