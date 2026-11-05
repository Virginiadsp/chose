const links = document.querySelectorAll(".categorias a");
const produtos = document.querySelectorAll(".car-itens .item");

links.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const categoria = link.dataset.filtro;

        produtos.forEach((produto) => {

            if (
                categoria === "item" ||
                produto.classList.contains(categoria)
            ) {
                produto.style.display = "";
            } else {
                produto.style.display = "none";
            }

        });

    });

});