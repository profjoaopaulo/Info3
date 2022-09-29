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

    let secao = document.getElementById("output");
    secao.innerHTML = `<h1>${(n1+n2+n3)/3}</h1>`;
}



