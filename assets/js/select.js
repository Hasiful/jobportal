
// Variables
const dropdowns = document.querySelectorAll('.main_banner_searchInner');
const inputs = document.querySelectorAll('.input_control');
const listsOfOptions = document.querySelectorAll('.selectlist_item');

// Functions
const toggleDropdown = (event) => {
  event.currentTarget.closest('.main_banner_searchInner').classList.toggle('opened');
};

// remove class
const closeDropdownFromOutside = (event) => {
  const openedDropdowns = document.querySelectorAll('.main_banner_searchInner');
  openedDropdowns.forEach((dropdown, index) => {
      const selectLists = document.querySelectorAll('.selectlist')[index]
      if (!dropdown.contains(event.target) && !selectLists.contains(event.target)) {
        dropdown.classList.remove('opened');
        // input value Empty
        let searchInputs = document.querySelectorAll(".search_input")
        ;[...searchInputs].forEach(searchItemInner => {
          searchItemInner.value = ""
        });
        const listOfOption = document.querySelectorAll('.selectlist_item');
        [...listOfOption].forEach(currentListOp => {
          currentListOp.style.display = "block"
        });
      }
  });
};

// Event Listeners
listsOfOptions.forEach((option) => {
  option.addEventListener('click', function(event){
    const input = event.currentTarget.closest('.search_select').querySelector('.input_control');
    input.value = event.currentTarget.textContent;
    const openedDropdowns = document.querySelectorAll('.main_banner_searchInner');
    openedDropdowns.forEach((dropdown) => {
        dropdown.classList.remove('opened');
    });
  });
});

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', toggleDropdown);
});

document.addEventListener('click', closeDropdownFromOutside);

// search onkeyup
let searchInputs = document.querySelectorAll(".search_input");
[...searchInputs].forEach(searchItem => {
    searchItem.addEventListener("input", function(){
        const searchItemList = searchItem.value.toUpperCase();
        const listOfOptions = searchItem.closest('.search_select').querySelectorAll('.selectlist_item');
        [...listOfOptions].forEach(currentList => {
            let currentListValue = currentList.innerText || currentList.innerHTML;
            
            if(currentListValue.toUpperCase().indexOf(searchItemList) > -1){
                currentList.style.display = "block";
            } else {
                currentList.style.display = "none";
            }
        });
    })
});
