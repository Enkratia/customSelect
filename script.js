const wrapper = document.querySelector(".wrapper"),
  options = wrapper.querySelector(".options"),
  searchInp = wrapper.querySelector("input"),
  selectBtn = wrapper.querySelector(".select-btn");

let countries = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi'];


function addCountry(selectedCountry) {
  options.innerText = "";
  countries.forEach(country => {
    let isSelected = country == selectedCountry ? "selected" : "";
    let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}

addCountry();

searchInp.addEventListener("keyup", () => {
  let arr;
  let searchedVal = searchInp.value.toLocaleLowerCase();
  arr = countries.filter(data => {
    return data.toLocaleLowerCase().startsWith(searchedVal);
  }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
  options.innerHTML = arr ? arr : "<p>Oops! Country not found</p>";
})

function updateName(selectedLI) {
  searchInp.value = "";
  let text = selectedLI.innerText;
  addCountry(text);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLI.innerText;
}

selectBtn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
})