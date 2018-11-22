const template = document.querySelector("#rockTemplate").content;




//1. fetch content
function getRock() {
    fetch("https://martanetza.com/kea/cms/huset_kbh/wp-json/wp/v2/music?categories=1&_embed")
        .then(res => res.json())
        .then(showRock)
}

function showRock(rockList) {
    //console.log(rockList)
    rockList.forEach(showSingleRock)
}

function showSingleRock(rock) {
    //console.log(rock)
    //, make a copy of the template
    const copy = template.cloneNode(true);
    copy.querySelector(".groupname").textContent = rock.title.rendered;
    copy.querySelector(".day").textContent = rock.acf.day;
    copy.querySelector(".date").textContent = rock.acf.date;

    copy.querySelector("img").src = rock._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;

    copy.querySelector(".details").href="details.html?rockID="+rock.id;


    document.querySelector("main").appendChild(copy)
}

getRock();
