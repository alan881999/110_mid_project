function change_map(ele) {
    console.log("/static/picture/map_" + ele.getAttribute('map-name') + ".jpg");
    console.log( ele.innerText);
    document.getElementById("map_picture").src = "/static/picture/map_" + ele.getAttribute('map-name') + ".jpg";
}