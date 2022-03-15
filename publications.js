// Fetching json file containing all the information about the publications (articles and books)

function fetchPublications() {
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
}

// Fetching json file containing all the information about the theses

function fetchTheses() {
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
}

// Fetching json file containing all the information about patents

function fecthPatents() {
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
}

// Routine to add publications in html page

function addPublications (data) {
    // Obtain the keys of the json file which are the years of publication. Note the reverse as the keys will be sorted chronologically, but we want 
    // publications to appear on the page as most recent first
    const publicationKeys = Object.keys(data).reverse();

    // Get the header element, which contains all the links for fast navigation and the list element which will hold the publications' details
    const header = document.getElementById("publications-header-collapsible");
    const list = document.getElementById("publications-list");

    for (let i = 0; i < publicationKeys.length; i++ ){

        //Loop through the keys, i.e. the years

        // Create a link for fast navigation to the year in question in the header, style and append
        const year = document.createElement("div");
        year.innerHTML = "<a href='#" + publicationKeys[i] + "'>" + publicationKeys[i] + "</a>";
        year.classList.add("ff-body","text-dark","year-link");
        header.appendChild(year);

        // Create new div to hold all the publications of the year
        const publicationsYear = document.createElement("div");
        publicationsYear.classList.add("publications-year");

        // add title of the year and append the div for publications, style it and add the right id so the fast navigation is possible
        const yearTitle = document.createElement("h2");
        yearTitle.innerHTML = publicationKeys[i]
        yearTitle.classList.add("ff-body","text-dark","fs-400");
        yearTitle.style.fontWeight = "bold";
        yearTitle.setAttribute("id",publicationKeys[i])
        publicationsYear.appendChild(yearTitle);

        // Append list of publications of the year to main list
        list.appendChild(publicationsYear);

        for (let j =0; j < data[publicationKeys[i]].length; j++){
            //Loop through elements of the year to append them to the list of publications of the year

            // Create paragraph element to contain the new publication element and style it
            const newPubDiv = document.createElement("div");
            newPubDiv.classList.add("publications-element");

            const newPub = document.createElement("p");
            newPub.classList.add("ff-body","text-dark","fs-300");
            newPubDiv.appendChild(newPub);

            if (data[publicationKeys[i]][j].type === "article"){
                // First conditional to check if the added publication is a research article, and fill the inner html of the paragraph accordingly
                newPub.innerHTML = data[publicationKeys[i]][j].authors + ", " +
                                    "<a href ='" + data[publicationKeys[i]][j].link +"' target='_blank'>" + data[publicationKeys[i]][j].title + "</a>" + ", " +
                                    data[publicationKeys[i]][j].journal + " " +
                                    "<span style = 'font-weight: bold;'>" + data[publicationKeys[i]][j].volume + "</span>" + ", " +
                                    data[publicationKeys[i]][j].page + " " +
                                    "(" + publicationKeys[i] + ").";
            } else if(data[publicationKeys[i]][j].type === "Book Chapter"){
                // Second conditional to check if the added publication is a book chapter, and fill the inner html of the paragraph accordingly
                newPub.innerHTML = "<span style='text-decoration: underline;'>Book Chapter:</span>" + " " +
                                    data[publicationKeys[i]][j].authors + ", " +
                                    "<span style='font-style: italic;'>" + data[publicationKeys[i]][j].chaptertitle + "</span>" + ", " +
                                    "In: " + data[publicationKeys[i]][j].booktitle + ", " +
                                    "Editors: " + data[publicationKeys[i]][j].editors + 
                                    " (" + data[publicationKeys[i]][j].publisher + ", " + publicationKeys[i] + ").";
            } else if (data[publicationKeys[i]][j].type === "Edited Book"){
                // Third conditional to check if the added publication is an edited book, and fill the inner html accordingly
                newPub.innerHTML = "<span style='text-decoration: underline;'>Edited Book:</span>" + " " +
                                    data[publicationKeys[i]][j].booktitle + ", " + 
                                    "Editors: " + data[publicationKeys[i]][j].editors + 
                                    " (" + data[publicationKeys[i]][j].publisher + ", " + publicationKeys[i] + ").";
            }

                        // Append new pubplication element to the list for the year
            publicationsYear.appendChild(newPubDiv)

            if (data[publicationKeys[i]][j].extra){
                const extraDiv = document.createElement("div");
                extraDiv.classList.add("publications-extra-hover");
                newPubDiv.appendChild(extraDiv);

                const extra = document.createElement("p");
                extra.classList.add("ff-body","text-dark","fs-300","publication-extra");
                extra.style.fontWeight = "bold";
                extra.innerHTML = data[publicationKeys[i]][j].extra;
                extraDiv.appendChild(extra);

                if (data[publicationKeys[i]][j].extraImg){

                    const imageDiv = document.createElement("div");
                    imageDiv.classList.add("image-extra");
                    const image = document.createElement("img");
                    image.src = './assets/publications/' + data[publicationKeys[i]][j].extraImg;
                    imageDiv.appendChild(image);
                    extraDiv.appendChild(imageDiv);
                }
            }
        }
    }
}

// Routine to add theses in the html page

function addTheses (data) {
    // Get the header element, which contains all the links for fast navigation and the list element which will hold the publications' details
    const header = document.getElementById("publications-header-collapsible");
    const list = document.getElementById("publications-list");

    // Create, style and append theses link to header with publication years
    const link = document.createElement("div");
    link.innerHTML = "<a href='#Theses'>Theses</a>";
    link.classList.add("ff-body","text-dark","year-link");
    header.appendChild(link);

    // Create and style a container to hold all the theses
    const thesesContainer = document.createElement("div");
    thesesContainer.classList.add("publications-year");

    // Create, style and append title of the section
    const thesesTitle = document.createElement("h2");
    thesesTitle.innerHTML = "Theses"
    thesesTitle.classList.add("ff-body","text-dark","fs-400");
    thesesTitle.style.fontWeight = "bold";
    thesesTitle.setAttribute("id","Theses")
    thesesContainer.appendChild(thesesTitle);

    // Append list of thesis to main publications' list
    list.appendChild(thesesContainer);

    for (let i = 0; i < data.length; i++){
        // Loop through the json file to add the theses

        // Create a new paragraph to hold the thesis information. Fill the information, style and append
        const newThesis = document.createElement("p");
        newThesis.classList.add("ff-body","text-dark","fs-300","publications-element");
        newThesis.innerHTML = data[i].author + ", " + 
                                "<a href='" + data[i].link + "' target='_blank'>" + data[i].title + "</a>" + " " +
                                "(" + data[i].year + ").";
        thesesContainer.appendChild(newThesis);

    }
}

// Routine to add patents in the html page

function addPatents (data) {
    // Get the header element, which contains all the links for fast navigation and the list element which will hold the publications' details
    const header = document.getElementById("publications-header-collapsible");
    const list = document.getElementById("publications-list");

    // Create, style and append patents link to header with publication years
    const link = document.createElement("div");
    link.innerHTML = "<a href='#Patents'>Patents</a>";
    link.classList.add("ff-body","text-dark","year-link");
    header.appendChild(link);

    // Create and style a container to hold all the patents
    const patentsContainer = document.createElement("div");
    patentsContainer.classList.add("publications-year");

    // Create, style and append title of the section
    const patentsTitle = document.createElement("h2");
    patentsTitle.innerHTML = "Patents"
    patentsTitle.classList.add("ff-body","text-dark","fs-400");
    patentsTitle.style.fontWeight = "bold";
    patentsTitle.setAttribute("id","Patents")
    patentsContainer.appendChild(patentsTitle);

    // Append list of thesis to main publications' list
    list.appendChild(patentsContainer)


    for (let i = 0; i < data.length; i++){
        // Loop through the json file to add the patents

        // Create a new paragraph to hold the patent information. Fill the information, style and append
        const newPatent = document.createElement("p");
        newPatent.classList.add("ff-body","text-dark","fs-300","publications-element");
        newPatent.innerHTML = data[i].authors + ", " + 
                                "<span style='font-style: italic;'>" + data[i].title + "</span>" + ", " +
                                 data[i].reference + ".";
        patentsContainer.appendChild(newPatent);

    }
}

// Execute fetch functions

function executeAsynchronously(functions, timeout) {
    for(var i = 0; i < functions.length; i++) {
      setTimeout(functions[i], timeout);
    }
  }

executeAsynchronously(
    [fetchPublications,fetchTheses,fecthPatents], 10);

// Handle Toggle for the years' list when screen size reduces

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