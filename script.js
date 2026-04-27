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
        imagem: "https://m.media-amazon.com/images/I/A1jBQ8onjaL.jpg",
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
// Função para exibir os livros encontrados
function exibirLivros(livros) {

    resultadosBusca.innerHTML = "";

    livros.forEach(function(livro) {

        const card = document.createElement("div");
        card.classList.add("livro");

        const img = document.createElement("img");
        img.src = livro.imagem;

        const titulo = document.createElement("h3");
        titulo.textContent = livro.titulo;

        const autor = document.createElement("p");
        autor.textContent = "Autor: " + livro.autor;

        const status = document.createElement("div");
        status.classList.add("status");
        // Verificar disponibilidade do livro e atualizar o status
        if (livro.disponivel) {
            status.textContent = "Disponível";
        } else {
            status.textContent = "Indisponível";
        }
        // Criar o botão de reserva
        const botao = document.createElement("button");
        botao.classList.add("botao");
        botao.textContent = "Reservar";

        if (!livro.disponivel) {
            botao.disabled = true;
        }

        botao.addEventListener("click", function() {
            // 
            botao.textContent = "Reservado!";
            botao.disabled = true;

            status.textContent = "Indisponível";

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