const pessoas = [
    {nome:'Érick', idade:20},
    {nome:'Emanuel', idade:45},
    {nome:'Aldenia', idade:45},
    {nome:'Maria', idade:18},
    {nome:'Francisco', idade:8}
]

const maior = pessoas.find(function(pessoas){
    return pessoas.idade > 18
})

console.log(maior)