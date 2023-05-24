// user banner image

const bannerChange = document.getElementById("banner_changeInput")
bannerChange.addEventListener("change", function(){
    readURL(this)
})
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

// user profile change

const userChange = document.getElementById("userChange")
userChange.addEventListener("change", function(){
    userImagechange(this)
})
function userImagechange(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#user')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}