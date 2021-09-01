const entradas = {
    entrada1: [{
        nome: "firefox.exe",
        tempoExecucao: 10,
        prioridade: "baixa",
        qtdMemoria: 20
    }, {
        nome: "tony.exe",
        tempoExecucao: 5,
        prioridade: "alta",
        qtdMemoria: 10
    }]
}

$(() => {
    //Cria CPU
    const cpu = new CPU({algoritimo: "prioridade", fracaoCpu: 69})
    
    //Insere processos da entrada na cpu
    entradas.entrada1.forEach( e => {
        cpu.addProcessos(new Processo(e)) 
    });

    console.log(cpu)
    cpu.executar()
})

