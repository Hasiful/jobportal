// root collapse
let mainRoot = document.getElementById("root")
let adminCollapse = document.getElementById("adminCollapse")
let adminMobile = document.getElementById("adminMobile")

adminCollapse.addEventListener("click", function() {
    mainRoot.classList.toggle("smallroot")
    this.classList.toggle("activeColapse")
})

adminMobile.addEventListener("click", function() {
    mainRoot.classList.toggle("sidebarActive")
    this.classList.toggle("activeColapse")
})

// notification
let notification = document.getElementById("notification")
let notificationBox = document.getElementById("notification_box")

window.addEventListener("click", function(e){
    if(e.target.id != "notification" && e.target.id != "notification_box"){
        notificationBox.classList.remove("activeN")
    }
})

notification.addEventListener("click", function() {
    notificationBox.classList.toggle("activeN")
})

// bottom nav
let othersNavbottom = document.getElementById("others_navbottom")
let othersNavbList = document.getElementById("others_navbList")

othersNavbottom.addEventListener("click", function(){
    othersNavbList.classList.toggle("activeListMenu")
})

window.addEventListener("click", function(event) {
    if (!othersNavbottom.contains(event.target) && !othersNavbList.contains(event.target)) {
        othersNavbList.classList.remove("activeListMenu")
    }
});

