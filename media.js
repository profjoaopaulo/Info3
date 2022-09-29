//alert("Oi")
function media() {
    let nota1field = document.getElementById("nota1id");
    let nota2field = document.getElementById("nota2id");
    let nota3field = document.getElementById("nota3id");

    console.log(nota1field.value);
    console.log(nota2field.value);
    console.log(nota3field.value);

    let n1 = Number(nota1field.value);
    let n2 = Number(nota2field.value);
    let n3 = Number(nota3field.value);

    let media = (n1+n2+n3)/3;

    let secao = document.getElementById("output");
    secao.innerHTML = `<h1>${media}</h1><br>`;

    if (media >= 7)
        secao.innerHTML += `<h2>Aprovado<h2>`;
    else if (media >= 4)
    secao.innerHTML += `<h2>Recuperacao<h2>`;
    else
        secao.innerHTML += `<h2>Reprovado<h2>`;
}



