// input elemanlarına erişmek
const marginRange = document.querySelector("#margin-range");
const blurRange = document.querySelector("#blur-range");
const backgroundRange = document.querySelector("#background-range");
const myDiv = document.querySelector("#myDiv");

// margin değiştirme
marginRange.addEventListener("input", (event) => {
    myPhoto.style.margin = `${event.target.value}px`;
});

// blur efekti ekleme
blurRange.addEventListener("input", (event) => {
    myDiv.style.filter = `blur(${event.target.value}px)`;
});

// arka plan rengini değiştirme
backgroundRange.addEventListener("input", (event) => {
    myDiv.style.backgroundColor = event.target.value;
});
