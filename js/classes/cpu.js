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
        this.loteriasGeradas = 
    }

    executar() {
        try {
            this[this.algoritimo]()
        } catch (err) {
            console.error(err)
        }
    }

    roundRobin(listaProcessos = this.listaProcessos) {
        if(listaProcessos.filter(p => p.status == "Completo").length == 0)
            return true

        

        

        setInterval(() => {
            this.roundRobin()
            this.atualizaUIProcessos()    
        }, this.clock * 1000);
    }

    prioridade() {
        console.log("funcao prioridade")
    }

    loteria() {
        
        let processosFiltrados = this.listaProcessos.filter(processo => {
            return processo.prioridade == 20
        })


        console.log(processosFiltrados)

    }

    addProcessos(processo) {
        this.listaProcessos.push(processo)
    }

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
        this.listaProcessos.forEach(({PID, nome, tempoExecucao, status, qtdExecutada}) => {
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