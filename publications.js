fetch("publications.json")
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        addPublications(data);
    })
    .catch(function (err) {
        console.log(err);
    })

fetch("theses.json")
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        addTheses(data);
    })
    .catch(function (err) {
        console.log(err);
    })

fetch("patents.json")
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        addPatents(data);
    })
    .catch(function (err) {
        console.log(err);
    })


function addPublications (data) {
    const publicationKeys = Object.keys(data).reverse();

    const header = document.getElementById("publications-header-collapsible");
    const list = document.getElementById("publications-list");

    for (let i = 0; i < publicationKeys.length; i++ ){

        const year = document.createElement("div");
        year.innerHTML = "<a href='#" + publicationKeys[i] + "'>" + publicationKeys[i] + "</a>";
        year.classList.add("ff-body","text-dark","year-link");
        header.appendChild(year);

        const publicationsYear = document.createElement("div");
        publicationsYear.classList.add("publications-year");

        const yearTitle = document.createElement("h2");
        yearTitle.innerHTML = publicationKeys[i]
        yearTitle.classList.add("ff-body","text-dark","fs-400");
        yearTitle.style.fontWeight = "bold";
        yearTitle.setAttribute("id",publicationKeys[i])
        publicationsYear.appendChild(yearTitle);

        list.appendChild(publicationsYear);

        for (let j =0; j < data[publicationKeys[i]].length; j++){

            const newPub = document.createElement("p");
            newPub.classList.add("ff-body","text-dark","fs-300","publications-element")
            if (data[publicationKeys[i]][j].type === "article"){
                newPub.innerHTML = data[publicationKeys[i]][j].authors + ", " +
                                    "<a href ='" + data[publicationKeys[i]][j].link +"' target='_blank'>" + data[publicationKeys[i]][j].title + "</a>" + ", " +
                                    data[publicationKeys[i]][j].journal + " " +
                                    "<span style = 'font-weight: bold;'>" + data[publicationKeys[i]][j].volume + "</span>" + ", " +
                                    data[publicationKeys[i]][j].page + " " +
                                    "(" + publicationKeys[i] + ").";
            } else if(data[publicationKeys[i]][j].type === "Book Chapter"){
                newPub.innerHTML = "<span style='text-decoration: underline;'>Book Chapter:</span>" + " " +
                                    data[publicationKeys[i]][j].authors + ", " +
                                    "<span style='font-style: italic;'>" + data[publicationKeys[i]][j].chaptertitle + "</span>" + ", " +
                                    "In: " + data[publicationKeys[i]][j].booktitle + ", " +
                                    "Editors: " + data[publicationKeys[i]][j].editors + 
                                    " (" + data[publicationKeys[i]][j].publisher + ", " + publicationKeys[i] + ").";
            } else if (data[publicationKeys[i]][j].type === "Edited Book"){
                newPub.innerHTML = "<span style='text-decoration: underline;'>Edited Book:</span>" + " " +
                                    data[publicationKeys[i]][j].booktitle + ", " + 
                                    "Editors: " + data[publicationKeys[i]][j].editors + 
                                    " (" + data[publicationKeys[i]][j].publisher + ", " + publicationKeys[i] + ").";
            }
            publicationsYear.appendChild(newPub)

        }
    }
}

function addTheses (data) {
    const header = document.getElementById("publications-header-collapsible");
    const list = document.getElementById("publications-list");

    const link = document.createElement("div");
    link.innerHTML = "<a href='#Theses'>Theses</a>";
    link.classList.add("ff-body","text-dark","year-link");
    header.appendChild(link);

    const thesesContainer = document.createElement("div");
    thesesContainer.classList.add("publications-year");

    const thesesTitle = document.createElement("h2");
    thesesTitle.innerHTML = "Theses"
    thesesTitle.classList.add("ff-body","text-dark","fs-400");
    thesesTitle.style.fontWeight = "bold";
    thesesTitle.setAttribute("id","Theses")
    thesesContainer.appendChild(thesesTitle);

    list.appendChild(thesesContainer);

    for (let i = 0; i < data.length; i++){
        const newThesis = document.createElement("p");
        newThesis.classList.add("ff-body","text-dark","fs-300","publications-element");
        newThesis.innerHTML = data[i].author + ", " + 
                                "<a href='" + data[i].link + "' target='_blank'>" + data[i].title + "</a>" + " " +
                                "(" + data[i].year + ").";
        thesesContainer.appendChild(newThesis);

    }
}

function addPatents (data) {
    const header = document.getElementById("publications-header-collapsible");
    const list = document.getElementById("publications-list");

    const link = document.createElement("div");
    link.innerHTML = "<a href='#Patents'>Patents</a>";
    link.classList.add("ff-body","text-dark","year-link");
    header.appendChild(link);

    const patentsContainer = document.createElement("div");
    patentsContainer.classList.add("publications-year");

    const patentsTitle = document.createElement("h2");
    patentsTitle.innerHTML = "Patents"
    patentsTitle.classList.add("ff-body","text-dark","fs-400");
    patentsTitle.style.fontWeight = "bold";
    patentsTitle.setAttribute("id","Patents")
    patentsContainer.appendChild(patentsTitle);

    patentsContainer.appendChild(patentsTitle);
    list.appendChild(patentsContainer)


    for (let i = 0; i < data.length; i++){
        const newPatent = document.createElement("p");
        newPatent.classList.add("ff-body","text-dark","fs-300","publications-element");
        newPatent.innerHTML = data[i].authors + ", " + 
                                "<span style='font-style: italic;'>" + data[i].title + "</span>" + ", " +
                                 data[i].reference;
        patentsContainer.appendChild(newPatent);

    }
}


const years = document.querySelector(".years-list");
const yearsToggle = document.querySelector(".pub-year-toggle");

yearsToggle.addEventListener("click", () => {
    const visibility = years.getAttribute("data-visible")
    if (visibility === "false") {
        years.setAttribute("data-visible", true)
        yearsToggle.setAttribute("aria-expanded",true)
    } else{
        years.setAttribute("data-visible", false)
        yearsToggle.setAttribute("aria-expanded", false)
    }
})