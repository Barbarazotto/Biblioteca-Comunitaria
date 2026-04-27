const livrosEncontrados = [

    {
        id: 1,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        imagem: "https://m.media-amazon.com/images/I/61x1ZHomWUL._SY522_.jpg",
        disponivel: false
    },

    {
        id: 2,
        titulo: "O Ratinho, o Morango Vermelho Maduro e o Grande Urso Esfomeado",
        autor: "Audrey Wood",
        imagem: "https://m.media-amazon.com/images/I/817OPPqhpmL._SY522_.jpg",
        disponivel: true
    },

    {
        id: 3,
        titulo: "Punk 57",
        autor: "Penelope Douglas",
        imagem: "https://m.media-amazon.com/images/I/91KsZkUtV8L._SY522_.jpg",
        disponivel: true
    },

    {
        id: 4,
        titulo: "Jojo's Bizarre Adventure Parte 7 Steel Ball Run 02",
        autor: "Hirohiko Araki",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_672194-MLA84362159548_052025-F.webp",
        disponivel: true
    }

];

const resultadosBusca = document.getElementById("resultadosBusca");

function exibirLivros(livros) {

    livros.forEach(function(livro) {

        const card = document.createElement("div");
        card.classList.add("card-livro");

        const img = document.createElement("img");
        img.setAttribute("src", livro.imagem);

        const titulo = document.createElement("h3");
        titulo.textContent = livro.titulo;

        const autor = document.createElement("p");
        autor.textContent = "Autor: " + livro.autor;

        const status = document.createElement("p");

        if (livro.disponivel) {

            status.textContent = "Disponível";
            status.classList.add("disponivel");

        } else {

            status.textContent = "Indisponível";
            status.classList.add("indisponivel");

        }

        const botao = document.createElement("button");
        botao.textContent = "Reservar";

        botao.setAttribute("data-id", livro.id);

        if (!livro.disponivel) {

            botao.disabled = true;

        }

        botao.addEventListener("click", function() {

            botao.textContent = "Reservado!";
            botao.disabled = true;

            console.log("Livro reservado: " + livro.titulo);

        });

        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(autor);
        card.appendChild(status);
        card.appendChild(botao);

        resultadosBusca.appendChild(card);

    });

}

exibirLivros(livrosEncontrados);