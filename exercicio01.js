let funcionarios = [];

for (let i = 0; i < 3; i++) {
    let colaborador = {
        nome : prompt("Nome do funcionario"),
        salario : Number(prompt("Salario do funcionario"))
    }
    funcionarios.push(colaborador)
}

function calcularBonus(salario){
    return salario * 0.10
}

for (let i = 0; i < funcionarios.length; i++) {
    let bonus = calcularBonus(funcionarios[i].salario)
    alert(
        "Resultado !!!\n\n" + 
        "Funcionario : " + funcionarios[i].nome + "\n" +
        "Salario : R$ " + funcionarios[i].salario + "\n" +
        "Bonus : R$ " + bonus + "\n" +
        "Salario final : R$ " + (funcionarios[i].salario + bonus)
    )
}
