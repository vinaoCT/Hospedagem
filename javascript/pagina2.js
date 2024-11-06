document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    const imagens = document.querySelectorAll('.imagens img');

    function mostrarImagem() {
        index++;
        if (index >= imagens.length) {
            index = 0;
        }
        const deslocamento = -index * 100; // 100% de largura de uma imagem
        document.querySelector('.imagens').style.transform = `translateX(${deslocamento}%)`;
    }

    setInterval(mostrarImagem, 3000); // Troca a imagem a cada 3 segundos
});
