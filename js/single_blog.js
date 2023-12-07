
function getBlogIdFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get("id"));
    return urlParams.get("id");
}

function getBlogTitleFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get("title"));
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
                <img src="${blogDetail.jetpack_featured_media_url}"  class="blog_image" alt="">
            </div>
        </div>
        <div class="blog_text">
                <p class="content">
                ${blogDetail.content.rendered}; 
                </p>
        </div>
        </div>
  `;

}

fetchBlogDetail();
