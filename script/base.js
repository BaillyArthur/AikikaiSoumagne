export function displayImport() {
    const header = fetch("./imports/header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    const footer = fetch("./imports/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

   
    return Promise.all([header, footer]);

}

export function btnMenuClicker() {
    const navMobile = document.getElementById("mobile")
    navMobile.classList.toggle("-translate-x-full");
    navMobile.classList.toggle("translate-x-0");
}



