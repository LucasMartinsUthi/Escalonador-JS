class CPU {
    // algoritimos aceitos
        // circular
        // prioridade 
        // loteria
    constructor({algoritimo = "circular", fracaoCpu = 10}) {
        this.algoritimo = algoritimo
        this.fracaoCpu = fracaoCpu

        this.listaProcessos = []
    }

    executar() {
        try {
            this[this.algoritimo]()
        } catch (err) {
            console.error(err)
        }
        
    }

    circular() {
        console.log("funcao circular")
    }

    prioridade() {
        console.log("funcao prioridade")
    }

    loteria() {
        console.log("funcao loteria")
    }

    addProcessos(processo) {
        this.listaProcessos.push(processo)
    }
}