function inverterArray() {
    const input = document.getElementById("inputArray").value;
    const elementos = input.split(",").map(e => e.trim()); 

    const original = [];
    for (let i = 0; i < elementos.length; i++) {
        original[i] = elementos[i]; 
    }

    const invertido = [];
    for (let i = elementos.length - 1; i >= 0; i--) {
        invertido[elementos.length - 1 - i] = elementos[i];
    }

    document.getElementById("outputOriginal").innerText = original.join(", ");
    document.getElementById("outputInvertido").innerText = invertido.join(", ");
}
