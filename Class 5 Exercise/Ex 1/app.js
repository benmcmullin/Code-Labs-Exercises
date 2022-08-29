const allLinks =JSON.parse(localStorage.getItem("link_list")) || [];


const body = document.body;
const input= document.querySelector(".link-input");
const overlay= document.querySelector(".overlay");
const form = document.querySelector("#link-form");
const linkList = document.querySelector(".link-list");


input.addEventListener("focusin" , focusInput);
input.addEventListener("focusout" , endFocus);
form.addEventListener("submit", createLink);

function focusInput () {
    body.classList.add("focus-form");
}

function endFocus () {
    if (body.classList.contains("focus-form"))
    body.classList.remove("focus-form");
}

function createLink(e) {
    e.preventDefault();
    const url=input.value

    allLinks.push(url);
    populateLinkList(allLinks);
    saveLinkListToLocalStorage(allLinks);


    // const linkContainer = document.createElement("li");
    // const newLink = document.createElement("a");
    // newLink.className = "link";
    // newLink.innerText = url;
    // newLink.href = url;
    // newLink.target = "_blank";
    // // console.log("newLink" , newLink);
    // linkContainer.appendChild(newLink);
    // linkList.appendChild(linkContainer);
    // form.reset();
}

function populateLinkList(links =[]) {
    linkList.innerHTML = links
    .map(
        (link) =>
        `<li> <a class="link" href=${link} target="_blank">${link}</a> </li>`
    )
    .join("")
}

function saveLinkListToLocalStorage(links=[]) {
    localStorage.setItem("link_list", JSON.stringify(links));
}
