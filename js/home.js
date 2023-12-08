const post_url = "https://www.rainyday.no/wp-json/wp/v2/posts";
const wrapper = document.querySelector(".gallery_wrap");
const gallery = document.querySelector(".gallery");
const image_holder = document.querySelector(".image_holder");
const span_image = document.querySelector(".span_image");


try {
    async function getPosts() {
        //Showing Loading Indication
        loadingIndicator();
        //fetch function in use 
        gallery.innerHTML = "";

        const response = await fetch(post_url); // fetching the url
        const results = await response.json(); // making the url readable that is in JSON format
        const post = results; // we got an array of objects, putting that array in a variable
        for (let i = 0; i < 6; i++) {
            console.log(post[i].id);
            console.log(post[i].title.rendered);

            gallery.innerHTML += `
            <div class="gallery_wrap>
               <div class="gallery">
               <a href="singleBlog.html?id=${post[i].id}&title=${post[i].title.rendered}">
                <div class="image_holder">
                <span class="span_image"><img src="${post[i].jetpack_featured_media_url}" alt="" /></span>
                </div>
               </a>
               <h4 class ="title">${post[i].title.rendered}</h4>
               <h6 class="date">${post[i].date}</h6>
                </div> `;
        }

    }

    //Function for Loading Indicator
    function loadingIndicator() {
        //const wrapper = document.querySelector(".gallery_wrap");
        // wrapper.innerHTML = "<li>Loading...</li>";
    }
    span_image.onclick = getPosts();
}

catch {
    error(console.log("something went wrong!"));
}


//   