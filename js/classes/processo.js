class Processo {
    constructor({nome, tempoExecucao, prioridade, qtdMemoria}) {
        this.PID = Bundle.uuid()
        // this.UID = 
        this.nome = nome
        this.tempoExecucao = tempoExecucao
        this.prioridade = prioridade
        this.qtdMemoria = qtdMemoria
    }
}