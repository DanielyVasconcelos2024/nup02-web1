  class Pessoa {
        constructor(nome, sobrenome, dataNascimento) {
            this.nome = nome.trim();
            this.sobrenome = sobrenome.trim();
            this.dataNascimento = dataNascimento;
            this.licencaVoo = false;
        }

        gerarLicenca() {
            if (this.licencaVoo) {
                return this.licencaVoo; 
            }

            let parte1 = this.sobrenome.toUpperCase().padEnd(5, '9').slice(0, 5);

            let parte2 = "-";

            const data = new Date(this.dataNascimento);
            const ano = data.getFullYear().toString();
            const mes = String(data.getMonth() + 1).padStart(2, '0');
            let parte3 = `${ano[2]}${mes}${ano[3]}`;

            let parte4 = ".";

            let parte5 = this.nome[0].toLowerCase();

            this.licencaVoo = `${parte1}${parte2}${parte3}${parte4}${parte5}`;
            return this.licencaVoo;
        }
    }

    function gerarLicencaVoo() {
        const nomeCompleto = document.getElementById("inputNomeCompleto").value.trim();
        const dataNascimento = document.getElementById("inputDataNascimento").value;

        if (!nomeCompleto || !dataNascimento) {
            alert("Preencha todos os campos.");
            return;
        }

        const partes = nomeCompleto.split(" ");
        if (partes.length < 2) {
            alert("Informe pelo menos nome e sobrenome.");
            return;
        }

        const nome = partes[0];
        const sobrenome = partes[partes.length - 1];

        const pessoa = new Pessoa(nome, sobrenome, dataNascimento);
        const licenca = pessoa.gerarLicenca();

        document.getElementById("outputDadosOriginais").textContent =
            `Nome: ${nomeCompleto}, Data de Nascimento: ${dataNascimento}`;
        document.getElementById("outputLicenca").textContent = licenca;
    }
