const template = document.querySelector("#rockTemplate").content;

//1. fetch content
function getContacts() {
    fetch("https://martanetza.com/kea/cms/huset_kbh/wp-json/wp/v2/contacts?=1&_embed")
        .then(res => res.json())
        .then(showContacts)
}

function showContacts(contactsList) {
    console.log(contactsList)
    contactsList.forEach(showSingleContacts)
}

function showSingleContacts(contacts) {
    console.log(contacts)
    //, make a copy of the template
    const copy = template.cloneNode(true);
    copy.querySelector("h1").textContent = contacts.title.rendered;
    copy.querySelector(".placename").textContent = contacts.acf.place_name;
    copy.querySelector(".address").textContent = contacts.acf.address;
    copy.querySelector(".postalcode").textContent = contacts.acf.postal_code;
    copy.querySelector(".phone").textContent = contacts.acf.phone;
    copy.querySelector(".mainemail").textContent = contacts.acf.main_email;
    copy.querySelector(".info").textContent = contacts.acf.info;
    copy.querySelector(".info2").textContent = contacts.acf.info2;

    copy.querySelector("img").src = contacts._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;

    document.querySelector("main").appendChild(copy)
}

getContacts();
