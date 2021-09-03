class Processo {
    constructor({nome, tempoExecucao, prioridade, qtdMemoria, qtdExecutada = 0, PID}) {
        this.PID = PID
        this.UID = uuidv4.uuid()
        this.nome = nome
        this.tempoExecucao = tempoExecucao
        this.prioridade = prioridade
        this.qtdMemoria = qtdMemoria

        this.status = "Incompleto"
        // quanto que ja foi executado
        this.qtdExecutada = qtdExecutada
    }
}