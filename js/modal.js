const modal_container = document.querySelector("#modal");
const close_button = document.querySelector(".close_button");
const blog_image = document.querySelector(".blog_img");


function getModal() {

    modal_container.addEventListener('click', () => {
        modal_container.showModal();
    })

    close_button.addEventListener('click', () => {
        modal.close();
    })
}

blog_image.onclick = getModal();


