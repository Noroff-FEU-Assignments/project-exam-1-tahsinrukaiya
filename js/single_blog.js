function getBlogIdFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
}

function getBlogTitleFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("title");
}

//FUNCTION TO FETCH BLOG DETAIL USING THEIR ID AND TITLE-------------------------

async function fetchBlogDetail() {

    const blogId = getBlogIdFromQuery();
    const blogTitle = getBlogTitleFromQuery();

    if (!blogId) {
        return;
    }

    const response = await fetch(`https://www.rainyday.no/wp-json/wp/v2/posts/${blogId}`);
    const blogDetail = await response.json();
    //const titleContainer = document.querySelector(".blog_heading");
    const blogDetailContainer = document.querySelector(".blog_box");


    blogDetailContainer.innerHTML =
        `<div class="blog_heading">
        <h2 class="blog_title">${blogDetail.title.rendered}</h2>
        <h5 class="blog_date">${blogDetail.date}</h5>
       </div>
       <div class="blog_container">
        <div class="blog_box">
        <div class="blog_img">
                <img src="${blogDetail.jetpack_featured_media_url}" alt=""class="blog_image">
            </div>
            <div class="blog_text">
                <p class="content">
                ${blogDetail.content.rendered}; 
                </p>
        </div>
        <dialog class="modal_container" id="modal">
        <button class="button close_button">
            Close
        </button>
        <img src="${blogDetail.jetpack_featured_media_url}" class="modal_image" alt=""/>
        </dialog>
        </div>
        </div>    
  `;

    const modal_container = document.querySelector("#modal");
    const close_button = document.querySelector(".close_button");
    const blog_image = document.querySelector(".blog_img");

    function getModal() {

        blog_image.addEventListener('click', () => {
            modal_container.showModal();

        })

        close_button.addEventListener('click', () => {
            modal.close();
        })
    }

    blog_image.onclick = getModal();

}

fetchBlogDetail();


