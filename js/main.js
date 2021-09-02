const entradas = {
    entrada1: [{
        nome: "firefox.exe",
        tempoExecucao: 10,
        prioridade: "baixa",
        qtdMemoria: 20
    }, {
        nome: "tony1.exe",
        tempoExecucao: 5,
        prioridade: "alta",
        qtdMemoria: 10
    }, {
        nome: "tony2.exe",
        tempoExecucao: 5,
        prioridade: "alta",
        qtdMemoria: 10
    }, {
        nome: "tony3.exe",
        tempoExecucao: 5,
        prioridade: "alta",
        qtdMemoria: 10
    }, {
        nome: "tony4.exe",
        tempoExecucao: 20,
        prioridade: "alta",
        qtdMemoria: 10,
        qtdExecutada: 5
    }]
}

$(() => {
    //Cria CPU
    const cpu = new CPU({algoritimo: "roundRobin", fracaoCpu: 69})
    
    //Insere processos da entrada na cpu
    entradas.entrada1.forEach( e => {
        cpu.addProcessos(new Processo(e)) 
    });

    cpu.atualizaUI()
    cpu.atualizaUIProcessos()

    $(".changeAlgotimo").click(({currentTarget}) => {
        cpu.algoritimo = $(currentTarget).val()
        cpu.atualizaUI()
    })

    $(".executa").click(() => cpu.executar())    
})

