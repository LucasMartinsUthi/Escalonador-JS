const entradas = {
    entrada1: [{
        nome: "firefox.exe",
        tempoExecucao: 10,
        prioridade: 1,
        qtdMemoria: 20
    }, {
        nome: "tony1.exe",
        tempoExecucao: 5,
        prioridade: "alta",
        qtdMemoria: 10
    }, {
        nome: "tony2.exe",
        tempoExecucao: 5,
        prioridade: 2,
        qtdMemoria: 10
    }, {
        nome: "tony3.exe",
        tempoExecucao: 5,
        prioridade: 2,
        qtdMemoria: 10
    }, {
        nome: "tony4.exe",
        tempoExecucao: 20,
        prioridade: 3,
        qtdMemoria: 10,
        qtdExecutada: 5
    }]
}

$(() => {
    //Cria CPU
    const cpu = new CPU({algoritimo: "roundRobin", fracaoCpu: 10, clock: 0.01})

    cpu.atualizaUI()
    cpu.atualizaUIProcessos()

    $(".changeAlgoritimo").click(({currentTarget}) => {
        cpu.algoritimo = $(currentTarget).attr('data-algoritimo')
        cpu.fracaoCpu = $(currentTarget).attr('data-fracao')
        cpu.atualizaUI()
    })

    $(".changeEntrada").click(({currentTarget}) => {
        let entrada = eval($(currentTarget).val())

        // Limpo a lista de processos
        cpu.listaProcessos = []

        //nova lista
        entrada.split("\n").forEach( e => {
            if(!e)
                return 

            let dados = e.split("|")

            let processo = {
                nome: dados[0],
                PID: dados[1],
                tempoExecucao: dados[2],
                prioridade: dados[3],
                UID: dados[4],
                qtdeMemoria : dados[5]
            }

            cpu.addProcessos(new Processo(processo)) 
        });

        //atualiza UI
        cpu.atualizaUI()
        cpu.atualizaUIProcessos()
    })

    $(".executa").click(() => cpu.executar())    
})

