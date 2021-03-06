const thanksEl = document.getElementsByClassName('thanks')[0];
const submitBtn = document.getElementsByClassName("rating__submit")[0];
const displayEl = document.getElementsByClassName("thanks__display__result")[0]
const ratingForm = document.getElementsByClassName('rating')[0];
const mainEl = document.getElementsByClassName('comp-rating')[0];

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    const ratingValue = ratingForm["rating__score__btn"].value;
    if (ratingValue) {
        displayEl.innerText = ratingValue;
        mainEl.classList.add("slideIn");
        mainEl.addEventListener('animationend', e => {
            ratingForm.style.display = "none";
            thanksEl.style.display = "flex";
            mainEl.classList.add("slideOut")
        })
    }
})

