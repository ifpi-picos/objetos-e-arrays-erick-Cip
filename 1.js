const aluno = {
    nome:'Érick',
    idade:20,
    curso:'Ads',
    notas:[7,7,8,10]
}

for (let propriedade in aluno){
    console.log(propriedade, aluno[propriedade]);
}