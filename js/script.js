function validateform() {
    var name = document.forms["message-form"]["valid-name"].value;
    var email = document.forms["message-form"]["valid-email"].value;
    var select = document.forms["message-form"]["selectinterest"].value;

    if(name == "" || email == "" || select == "select"){
        alert("tidak boleh ada yang kosong");
        return false;
    }
}

