class CPU {
    // algoritimos aceitos
        // roundRobin
        // prioridade 
        // loteria

    //clock em segundos
    constructor({algoritimo = "roundRobin", fracaoCpu = 10, clock = 0.5}) {
        this.algoritimo = algoritimo
        this.fracaoCpu = fracaoCpu
        this.clock = clock

        this.listaProcessos = []
    }

    executar() {
        //Executa o algoritmo escolhido
        try {
            this[this.algoritimo]()
        } catch (err) {
            console.error(err)
        }
    }

    roundRobin(ticket) {
        let listaProcessos = this.listaProcessos

        //Verifico se todos processos foram completo e termino a recursão 
        if(listaProcessos.filter(p => p.status == "Incompleto").length == 0)
            return

        //roundRobin com ticket gerado pela loteria
        if(!!ticket){
            if(listaProcessos[0].prioridade == ticket) {
                listaProcessos[0].qtdExecutada += parseInt(this.fracaoCpu)
                if(parseInt(listaProcessos[0].qtdExecutada) >= parseInt(listaProcessos[0].tempoExecucao)) {
                    listaProcessos[0].status = "Completo"
                    this.atualizaUIProcessos()
                }
            } 
        
        //roundRobin normal
        } else {
            listaProcessos[0].qtdExecutada += parseInt(this.fracaoCpu)
            if(parseInt(listaProcessos[0].qtdExecutada) >= parseInt(listaProcessos[0].tempoExecucao))
                listaProcessos[0].status = "Completo"

            this.atualizaUIProcessos()
        }

        //Jogo o primeiro processo para o final da lista
        let processoRemovido = listaProcessos.shift()
        listaProcessos.push(processoRemovido)

        //recursividade
        setTimeout(() => {
            this.roundRobin(ticket)
        }, this.clock * 1000);
    }

    prioridade() {
        //Ordenos os precessos por odem de prioridade e executo o roundRobin ordenado
        this.listaProcessos = this.listaProcessos.sort((a, b) => a.prioridade - b.prioridade)
        this.roundRobin()
    }

    loteria() {
        //Verifico se todos processos foram completo e termino a recursão 
        if(this.listaProcessos.filter(p => p.status == "Incompleto").length == 0)
            return

        let ticket = Math.floor(Math.random() * 100)        
        //Realizo um roundRobin baseado em uma prioridade(ticket) aleatoria
        this.roundRobin(ticket)

        setTimeout(() => {
            this.loteria()
        }, this.clock * 1000);

    }

    addProcessos(processo) {
        this.listaProcessos.push(processo)
    }

    //Funções para atualizar a interface
    atualizaUI() {
        let descsAlgoritimo = {
            roundRobin : "Round Robin",
            prioridade : "Prioridade",
            loteria : "Loteria",
        }

        $(".cpu_algoritimo").html(`<b>Algoritimo:</b> ${descsAlgoritimo[this.algoritimo]}`)
        $(".cpu_fracao").html(`<b>Fracao CPU:</b> ${this.fracaoCpu}`)
        $(".cpu_nProcessos").html(`<b>Processos:</b> ${this.listaProcessos.length}`)
    }

    atualizaUIProcessos() {
        let conteudo = ""
        let lista = [...this.listaProcessos]
        lista.reverse().forEach(({PID, nome, tempoExecucao, status, qtdExecutada}) => {
            let porcentagemExecutada = qtdExecutada / tempoExecucao * 100
            conteudo += `
                <div class="d-flex" id="${PID}">
                    <div class=" col-2 nomeProcesso">${nome}</div>
                    <div class="col-2 status">${status}</div>
                    <div class="col-2 tamanho">${tempoExecucao}</div>
                    <div class="col-6 progresso progress">
                        <div class="progress-bar" role="progressbar" style="width: ${porcentagemExecutada}%" aria-valuenow="${qtdExecutada}" aria-valuemin="0" aria-valuemax="${tempoExecucao}"></div>
                    </div>
                </div>
            `
        })

        $(".processos").html(`
            <div class="d-flex cabecalho mb-2">
                <div class=" col-2"><b>Nome</b></div>
                <div class=" col-2"><b>Status</b></div>
                <div class=" col-2"><b>Tamanho</b></div>
                <div class=" col-6"><b>Progresso</b></div>
            </div>
            ${conteudo}
        `)
    }
}