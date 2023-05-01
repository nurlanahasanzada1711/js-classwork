const API_URL = 'https://northwind.vercel.app/api/suppliers';

(async function getData() {
    const tableBody = document.querySelector(".table-body")

    try {
        const res = await fetch(API_URL)
        const data = await res.json()

        data.forEach(element => {
            let newRow = createRow(element);
            tableBody.appendChild(newRow);
        });

    } catch (err) {
        console.log(err)
    }
})();



function createRow(element) {
    let row = document.createElement("tr");

    let id = document.createElement("td");
    id.innerText = element.id;

    let name = document.createElement("td");
    name.innerText = element?.contactName;

    let title = document.createElement("td");
    title.innerText = element?.contactTitle;

    let country = document.createElement("td");
    country.innerText = element?.addresss?.country;

    let buttonTd = document.createElement("td");

    let button = document.createElement("a");
    button.setAttribute("role", "button");
    button.setAttribute("href", "edit.html");

    let buttonRight = document.createElement("button");


    const deleteCategoryById = async (id) => {
        await fetch(`${API_URL}/${id}`, {
            method: 'Delete',
        })
    };

    buttonRight.addEventListener("click", (e) => {
        if (!confirm("Are you sure you want to delete?")) return;
        deleteCategoryById(element.id);
        e.target.parentElement.parentElement.remove();
    })

    buttonTd = append(button, buttonRight);

    row.append(id, name, title, country, buttonTd);


    return col;
}