
const post_container = document.querySelector("#main");
const content_container = document.querySelector("#content");

const md = window.markdownit();

function load_post(posts)
{
    list = document.querySelector("#main");

    posts.forEach(post => {
        let container = document.createElement("div"); 
        let a = document.createElement("span"); 
        let inner = document.createElement("div");

        let category = document.createElement("p");
        let date = document.createElement("p");

        a.addEventListener("click", function(){
            update_content(post['link'])
        })
        a.innerText = post['title'];
        category.innerText = post['category'];
        date.innerText = post['date'];

        inner.appendChild(category);
        inner.appendChild(date);

        container.appendChild(a); 
        container.appendChild(inner);

        line = document.createElement("hr");

        list.appendChild(container);
        list.appendChild(line);
    });
}

function update_content(link)
{
    post_container.classList.toggle("vinish");
    content_container.classList.toggle("vinish");

    fetch(link)
    .then((res) => {
        return res.text();
    })
    .then((obj) => {
        let b = md.render(obj);
        content_container.innerHTML = b;
    })
}

function init()
{
    fetch("./list.json")
    .then((res) => {
        return res.json();
    })
    .then((obj) => {
        load_post(obj.post);
    })
}

init();