    // view_change btn
    const viewChange = document.getElementById("view_change")
    const gridBtn = document.getElementById("grid_btn")
    const listBtn = document.getElementById("list_btn")

    gridBtn.addEventListener("click", () => {
      viewChange.classList.add("grid_view")
      viewChange.classList.remove("list_view")
    })

    listBtn.addEventListener("click", () => {
      viewChange.classList.add("list_view")
      viewChange.classList.remove("grid_view")
    })

    // custom range

    const mySlider = document.getElementById("mySlider");

    const sliderValue = document.getElementById("slider-value");

    function slider(){
        valPercent = (mySlider.value / mySlider.max)*100;
        mySlider.style.background = `linear-gradient(to right, var(--mainColor) ${valPercent}%, #d5d5d5 ${valPercent}%)`;
        sliderValue.textContent = mySlider.value;
    }
    slider();