AOS.init();

const dataDOEvento = new Date("may 15 2025 19:00:00");
const timeStampDoEvento = dataDOEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;


    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMS);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMS) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0 ){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = ' A comemoração Já aconteceu!';
    }
}, 1000)