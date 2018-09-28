timer = setInterval(swapImage, 500);

function swapImage(){
    id = document.getElementById("imageBig").alt
    document.getElementsByTagName("title")[0].innerHTML = id;
    if (id < 2){
        id++;
        document.getElementById("imageBig").src = imageSelect[id];
        document.getElementById("imageBig").alt = id;
    }
    else{
        id = 0;
        document.getElementById("imageBig").src = imageSelect[id];
        document.getElementById("imageBig").alt = id;
    }

}
imageSelect = ["tree1.jpg", "tree2.jpg", "tree3.jpg"]
function changeImage(id){
    document.getElementById("imageBig").src = imageSelect[id];
    document.getElementById("imageBig").alt = id;
}
//use data-* attribute instead of alt, figure out how to dispaly an alt in imageBig