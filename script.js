const ratingEl = document.getElementsByClassName('rating')[0];
const thanksEl = document.getElementsByClassName('thanks')[0];
const submitBtn = document.getElementsByClassName("rating__submit")[0];
const displayEl = document.getElementsByClassName("thanks__display__result")[0]
const rateBtns = document.getElementsByClassName("rating__score__btn");
let ratingValue = null;

for (let i = 0; i < rateBtns.length; i++) {
    rateBtns[i].addEventListener('click', e => {
        e.preventDefault();
        hightLightBtn(i);
        ratingValue = e.target.innerText;
        displayValue();
    });
}

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    if (ratingValue) {
        ratingEl.style.display = "none";
        thanksEl.style.display = "flex";
    }
})

const hightLightBtn = (position) => {
    for (let i = 0; i < rateBtns.length; i++) {
        if (i === position) {
            rateBtns[i].classList.add("active");
        } else {
            rateBtns[i].classList.remove("active");
        }
    }
}

const displayValue = () => {
    displayEl.innerText = ratingValue;
}