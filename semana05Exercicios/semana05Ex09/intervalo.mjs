
const intervalo = setInterval(()=>{
    const hms = new Date();
    let horaAtual = hms.toLocaleTimeString()
    console.log(`${horaAtual}`);
},2000);

setTimeout(()=>{
    clearInterval(intervalo);
},12000);