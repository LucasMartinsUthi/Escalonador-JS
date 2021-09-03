$(() => {
    //Cria CPU
    const cpu = new CPU({algoritimo: "roundRobin", fracaoCpu: 10, clock: 0.01})

    //Atualiza os Dados em tela incialmente
    cpu.atualizaUI()
    cpu.atualizaUIProcessos()

    //Eventos para alterar algoritmo e entrada de dados
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

    //Executa o algoritimo escolhido
    $(".executa").click(() => cpu.executar())    
})

