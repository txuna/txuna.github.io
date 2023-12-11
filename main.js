
function load_post(posts)
{
    list = document.querySelector("#main");

    posts.forEach(post => {
        let container = document.createElement("div"); 
        let a = document.createElement("a"); 
        let inner = document.createElement("div");

        let category = document.createElement("p");
        let date = document.createElement("p");

        a.setAttribute("href", post['link']);
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