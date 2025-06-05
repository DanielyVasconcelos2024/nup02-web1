function gerarChunks(n) {
    if (n <= 0) return "";
    if (n === 1) return "chunk";
    return "chunk-" + gerarChunks(n - 1);
}

console.log(gerarChunks(4)); 
console.log(gerarChunks(1)); 
console.log(gerarChunks(8)); 
console.log(gerarChunks(2)); 
