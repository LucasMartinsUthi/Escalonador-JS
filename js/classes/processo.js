class Processo {
    constructor({nome, tempoExecucao, prioridade, qtdMemoria, qtdExecutada = 0, PID, UID}) {
        this.PID = PID
        this.UID = UID
        this.nome = nome
        this.tempoExecucao = tempoExecucao
        this.prioridade = prioridade
        this.qtdMemoria = qtdMemoria

        this.status = "Incompleto"
        // quanto que ja foi executado
        this.qtdExecutada = qtdExecutada
    }
}