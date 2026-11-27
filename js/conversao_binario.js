

document.getElementById("tipo").onchange = function() {
    document.getElementById("valor").value = "";
    document.getElementById("valor").placeholder =
        this.value === "ip" ? "Digite o IP" : "Digite o número";
};

document.getElementById("valor").oninput = function() {
    if (document.getElementById("tipo").value === "ip") {
        let valor = this.value.replace(/\D/g, "").slice(0, 12);
        this.value = valor.match(/.{1,3}/g)?.join(".") || "";
    }
};

function converter() {
    let valor = document.getElementById("valor").value;
    let tipo = document.getElementById("tipo").value;
    let resultado;

    if (tipo === "numero") {
        resultado = Number(valor).toString(2);
    } else {
        resultado = valor.split(".").map(n =>
            Number(n).toString(2).padStart(8, "0")
        ).join(".");
    }

    document.getElementById("resultado").innerText =
        "Resultado: " + resultado;
}