// popup
let mainpopup = document.getElementById("mainpopup")
let addRecuirment = document.getElementById("add_jobprocessBtn")
let btnClose = document.getElementsByClassName("popup_close")
;[...btnClose].forEach(closeBtn => {
    closeBtn.addEventListener("click", () =>{
        mainpopup.style.cssText = "visibility: hidden; opacity: 0;"
    })
});
addRecuirment.addEventListener("click", () =>{
    mainpopup.style.cssText = "visibility: visible; opacity: 1;"
})

// active
let jobprocessItem = document.getElementsByClassName("jobprocess_steppop_item")
;[...jobprocessItem].forEach((innerItem,index) => {
    let popupCheckedmain = document.getElementsByClassName("popup_checked")[index]
    innerItem.addEventListener("click", function(){
        ;[...jobprocessItem].forEach((nestedItem, index) => {
            let popupChecked = document.getElementsByClassName("popup_checked")[index]
            nestedItem.classList.remove("active")
            innerItem.classList.add("active")
            popupChecked.removeAttribute("checked", "");
        });
        popupCheckedmain.setAttribute("checked", "");
    })
});

// active
let jobprocesBox = document.getElementsByClassName("job_process_boxmain")
;[...jobprocesBox].forEach(boxItem => {
    boxItem.addEventListener("click", function(){
        ;[...jobprocesBox].forEach(boxItemInner => {
            boxItemInner.classList.remove("active")
        });
        boxItem.classList.add("active")
    })
});

// active

let advanceFilter = document.getElementsByClassName("advance_filter_itemContent")

;[...advanceFilter].forEach((filterItem,index) => {
    let filterForm = document.getElementsByClassName("advance_filter_item")[index]
    filterItem.addEventListener("click", function(){
        let filterActive = document.querySelector(".activeFilter")
        if(!filterForm.classList.contains("activeFilter") && filterActive){
            filterActive.classList.remove("activeFilter")
        }
        filterForm.classList.toggle("activeFilter")
    })
});

window.addEventListener("click", function(event) {
    let clickedElement = event.target;
    if (!clickedElement.closest(".advance_filter_item") && !clickedElement.closest(".filter_form")) {
      let filterActive = document.querySelector(".activeFilter");
      if (filterActive) {
        filterActive.classList.remove("activeFilter");
      }
    }
  });

// view cv
let viewCv = document.getElementsByClassName("appcard_info_name")

// cvpopup
let closeCv = document.getElementById("popup_closecv")
let popupCv = document.getElementById("popup_cv")
closeCv.addEventListener("click", function(){
    popupCv.style.cssText = "visibility: hidden; opacity: 0;"
})

// user cv view
;[...viewCv].forEach(nameItem => {
    nameItem.addEventListener("click", function(){
        popupCv.style.cssText = "visibility: visible; opacity: 1;"
    })
});

// view tabs

let detailsCvBtn = document.getElementById("cvtabs_btndetails")
let shortCvBtn = document.getElementById("cvtabs_btnshort")
let detailsCvView = document.getElementById("cvdetails_view")
let shortCvView = document.getElementById("cvshort_view")

detailsCvBtn.addEventListener("click", function(){
    detailsCvView.style.cssText = "display: block"
    shortCvView.style.cssText = "display: none"
    this.classList.add("activeTab")
    shortCvBtn.classList.remove("activeTab")
})

shortCvBtn.addEventListener("click", function(){
    detailsCvView.style.cssText = "display: none"
    shortCvView.style.cssText = "display: block"
    this.classList.add("activeTab")
    detailsCvBtn.classList.remove("activeTab")
})

// popup step

let stepItemBtn = document.getElementsByClassName("step_itembtn")
let stepItemBtnOne = document.getElementsByClassName("step_itembtn")[0]
let stepItemBtnFirst = document.getElementById("step_itembtnfirst")
let stepPopForm = document.getElementById("jobprocess_popform")
let steppopRequir = document.getElementById("steppop_requir")
;[...stepItemBtn].forEach(stepItem => {
    stepItem.addEventListener("click", function(){
        stepPopForm.style.cssText = "display: block"
        steppopRequir.style.cssText = "display: block"
    })
});

stepItemBtnFirst.addEventListener("click", function(){
    stepPopForm.style.cssText = "display: none"
})

stepItemBtnOne.addEventListener("click", function(){
    steppopRequir.style.cssText = "display: none"
})