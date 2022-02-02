function calculadora(){
    const operação = Number(prompt("Qual operação deseja fazer? \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão \n 5 - Divisão Inteira \n 6 - Pontecialização \n 7 - Sair"));

    function msgAteMais() {
        alert("Até mais!");
    }

    function msgErroNumeros() {
        alert("Digite apenas valores númericos!");
    }

    function msgErroOpcao() {
        alert("Digite uma opção válida!");
    }

    if (operação >= 1 && operação <=6) {
        let n1 = Number(prompt("Insira primeiro valor:"));
        let n2 = Number(prompt("Insira segundo valor:"));
        let resultado;

        if (!n1 || !n2) {
            msgErroN();
            calculadora();
        } else {
            function somar() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperação();
            }
        
            function substracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperação();
            }
        
            function mutiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperação();
            }
        
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperação();
            }
        
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da seguinte dividasão: ${n1} / ${n2} é igual ${resultado}`);
                novaOperação();
            }
        
            function pontecia() {
                resultado = n1 ** n2;
                alert(`${n1} elavado a  ${n2} = ${resultado}`);
                novaOperação();
            }
        
            function novaOperação() {
                const novaOpcao = Number(prompt("Deseja Fazer uma nova operação: \n 1 - Sim \n 2 - Não"))
                if (novaOpcao != 2) {
                    calculadora();
                } else {
                    msgAteMais();
                }
            }
        }

        /* Resolvendo menu com if
        if (operação == 1) {
            somar();
        } else if (operação == 2) {
            substracao();
        } else if (operação == 3) {
            mutiplicacao();
        } else if (operação == 4) {
            divisaoReal();
        } else if (operação == 5) {
            divisaoInteira();
        } else if (operação == 6) {
            pontecia();
        }

        Resolvendo menu com swith */

        switch (operação) {
            case 1:
            somar();
            break;
                case 2:
                substracao();
                break;
                    case3:
                    mutiplicacao();
                    break;
                        case 4:
                        divisaoInteira();
                        break;
                            case 5:
                            divisaoInteira();
                            break;
                                case 6:
                                pontecia();
                                break;
        }

    } else if (operação == 7) {
        msgAteMais();
    } else {
    msgErroOpcao();
    calculadora();  
    }
}

calculadora();

