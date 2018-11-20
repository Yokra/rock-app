const template = document.querySelector("#rockTemplate").content;

//1. fetch content
function getRock() {
    fetch("https://martanetza.com/kea/cms/huset_kbh/wp-json/wp/v2/music?categories=1&_embed")
        .then(res => res.json())
        .then(showRock)
}

function showRock(rockList) {
    console.log(rockList)
    rockList.forEach(showSingleRock)
}

function showSingleRock(rock) {
    console.log(rock)
    //, make a copy of the template
    const copy = template.cloneNode(true);
    copy.querySelector(".groupname-details").textContent = rock.title.rendered;
    copy.querySelector(".day-details").textContent = rock.acf.day;
    copy.querySelector(".date-details").textContent = rock.acf.date;
    copy.querySelector(".venue").textContent = rock.acf.venue;
    copy.querySelector(".onlineprice span").textContent = rock.acf.online_price;
    copy.querySelector(".doorhour span").textContent = rock.acf.door_hour;
    copy.querySelector(".hour span").textContent = rock.acf.hour;
    copy.querySelector(".artistdescription").textContent = rock.acf.artist_description;
    copy.querySelector(".image-details").src =rock.acf.artist_photos.sizes.medium;

    document.querySelector("main").appendChild(copy)
}

getRock();
