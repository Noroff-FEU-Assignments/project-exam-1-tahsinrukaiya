const load_more = document.querySelector(".load_more");
const load_moreBtn = document.querySelector(".load_moreBtn");
console.log(load_moreBtn);
const more_post_url = "https://www.rainyday.no/wp-json/wp/v2/posts?per_page=22";
const more_posts = document.querySelector(".blog_container");


load_moreBtn.addEventListener('click', () => {

    try {
        async function getPosts() {
            //Showing Loading Indication
            loadingIndicator();
            //fetch function in use 
            more_posts.innerHTML = "";
            const response = await fetch(more_post_url); // fetching the url
            const results = await response.json(); // making the url readable that is in JSON format
            const post = results; // we got an array of objects, putting that array in a variable

            for (let i = 0; i < post.length; i++) {
                more_posts.innerHTML += `
            <div class="blog_container">
            <div class ="blog_box">
            <div class="blog_img">
                <img src="${post[i].jetpack_featured_media_url}"/>
            </div>
            <div class="blog_text">
                <span class="title">${post[i].title.rendered} </span>
                <span class="date">${post[i].date}</span>
                </a>
                <a class="blogBtn" href="singleBlog.html?id=${post[i].id}&title=${post[i].title.rendered}">Read More</a>
                </div>
            </div>
        </div>`;
            }

            //Function for Loading Indicator
            function loadingIndicator() {
                const more_posts = document.querySelector(".blog_container");
                more_posts.innerHTML = "<li>Loading...</li>";
            }
        }
        more_posts.onclick = getPosts();
    }
    catch {
        error();
    }

})

