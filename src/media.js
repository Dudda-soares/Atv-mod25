    class MediadeNotas {
        #nota;

        constructor(nome, nota){
            this.nome = nome;
            this.#nota = nota;
        }

        get nota(){
            return this.#nota
        }

        res(){
        return `O aluno ${this.nome} possui a media ${this.#nota}`;
            
        }
    }
    const alunos = [
        new MediadeNotas('Nami Santana', 5),
        new MediadeNotas('Eduarda Soares', 9),
        new MediadeNotas('Robin Soares', 8),
        new MediadeNotas('Francisco Alencar', 4),
        new MediadeNotas('Vinicius Soares', 6),
        new MediadeNotas('Diana Soares', 10)

    ];
  
    const maiores = alunos

        .filter(media => media.nota >= 6)
        .map(media => media.res())

    console.log(maiores);






