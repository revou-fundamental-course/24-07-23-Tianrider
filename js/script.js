function validateform() {
    var name = document.forms["message-form"]["valid-name"].value;
    var email = document.forms["message-form"]["valid-email"].value;
    var select = document.forms["message-form"]["selectinterest"].value;

    if(name == "" || email == "" || select == "select"){
        alert("tidak boleh ada yang kosong");
        return false;
    }
}

var slideindex = 1
setInterval(function(){
    autonext(1)
    console.log("loopingg")
}, 3000)

function autonext(index) {
    showImage(slideindex += index)
}

function showImage(index) {
    const imglist = document.getElementsByClassName("slider")
    console.log (imglist)
    if (index > imglist.length) {slideindex = 1}
    if (index < 1) (slideshow = imglist.lenght)
    for (i = 0; i < imglist.length; i++) {
        imglist[i].style.display ="none"
    }
    imglist[slideindex - 1].style.display = "block"
}

