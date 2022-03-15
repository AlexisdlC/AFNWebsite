function fetchUndergrads() {
    fetch("alumni_undergrad.json")
        .then(function (response){
            return response.json();
        })
        .then(function (data) {
            addDataUndergrad(data);
        })
        .catch(function (err) {
            console.log(err);
        })
}

function fetchGradsPostDocs() {
    fetch("alumni_gradpostdoc.json")
        .then(function (response){
            return response.json();
        })
        .then(function (data) {
            addDataGradPostDoc(data);
        })
        .catch(function (err) {
            console.log(err);
        })
}

// function fetchPostdocs() {
//     fetch("alumni_postdoc.json")
//         .then(function (response){
//             return response.json();
//         })
//         .then(function (data) {
//             addDataPostdocs(data);
//         })
//         .catch(function (err) {
//             console.log(err);
//         })
// }

function fetchVisitors() {
    fetch("alumni_visitors.json")
        .then(function (response){
            return response.json();
        })
        .then(function (data) {
            addDataVisitors(data);
        })
        .catch(function (err) {
            console.log(err);
        })
}

function addDataUndergrad(data){
    const list = document.getElementById("alumni-list");
    const alumniTable = document.createElement("div");

    alumniTable.classList.add("grid","alumni-list")

    const header = document.createElement("div");
    header.classList.add("grid","text-dark","ff-body","fs-400","alumni-list-row");
    header.setAttribute("id","alumni-header");

    const headerName = document.createElement("p");
    headerName.innerHTML = "Name";
    headerName.style.gridArea = "Name";
    header.appendChild(headerName);

    const headerPosition = document.createElement("p");
    headerPosition.innerHTML = "Position";
    headerPosition.style.gridArea = "Position";
    header.appendChild(headerPosition);

    const headercurrentInstitution = document.createElement("p");
    headercurrentInstitution.innerHTML = "Current Institution";
    headercurrentInstitution.style.gridArea = "currentInstitution";
    header.appendChild(headercurrentInstitution);

    const headercurrentPosition = document.createElement("p");
    headercurrentPosition.innerHTML = "Current Position";
    headercurrentPosition.style.gridArea = "currentPosition";
    header.appendChild(headercurrentPosition);

    const headeremail = document.createElement("p");
    headeremail.innerHTML = "email";
    headeremail.style.gridArea = "email";
    header.appendChild(headeremail);

    const title = document.createElement("h2");
    title.innerHTML = "Undergraduate Students";
    title.classList.add("text-dark","ff-body","fs-500")
    title.style.marginBottom = "1rem";
    title.setAttribute("id","UndergraduateStudents")
    list.appendChild(title);

    alumniTable.appendChild(header);

    list.appendChild(alumniTable);

    const alumniHeader = document.getElementById("alumni-header-main");

    const link = document.createElement("div");
    link.innerHTML = "<a href='#UndergraduateStudents'>Undergraduate Students</a>";
    link.classList.add("ff-body","text-dark","alumni-link");
    alumniHeader.appendChild(link);

    for (let i = 0; i < data.length; i++){
        const newAlumni = document.createElement("div");
        newAlumni.classList.add("ff-body","text-dark","fs-200","grid","alumni-list-row");

        const newAlumniName = document.createElement("p");
        newAlumniName.style.gridArea = "Name";
        newAlumniName.style.fontWeight= "bold"
        newAlumniName.innerHTML = data[i].name;
        newAlumni.appendChild(newAlumniName);

        const newAlumniPosition = document.createElement("p");
        newAlumniPosition.style.gridArea = "Position";
        newAlumniPosition.style.fontStyle= "italic";
        newAlumniPosition.innerHTML = "<span class='alumni-subtitle'>(</span>" + data[i].groupPosition + "<span class='alumni-subtitle'>)</span>";
        newAlumni.appendChild(newAlumniPosition);

        const newAlumniCurrentInstitution = document.createElement("p");
        newAlumniCurrentInstitution.style.gridArea = "currentInstitution";
        newAlumniCurrentInstitution.innerHTML = "<span class='alumni-subtitle'>Current Institution:</span>" + " " + data[i].currentInstitution;
        newAlumni.appendChild(newAlumniCurrentInstitution);

        const newAlumniCurrentPosition = document.createElement("p");
        newAlumniCurrentPosition.style.gridArea = "currentPosition";
        newAlumniCurrentPosition.innerHTML = "<span class='alumni-subtitle'>Current Position:</span>" + " " + data[i].currentPosition;
        newAlumni.appendChild(newAlumniCurrentPosition);

        const newAlumniEmail = document.createElement("p");
        newAlumniEmail.style.gridArea = "email";
        newAlumniEmail.style.overflowWrap = "break-word";
        newAlumniEmail.innerHTML = "<a href='mailto:" + data[i].email + "'>" + data[i].email + "</a>";
        newAlumni.appendChild(newAlumniEmail);

        alumniTable.appendChild(newAlumni);
    }
}

function addDataGradPostDoc(data){
    const list = document.getElementById("alumni-list");
    const alumniTable = document.createElement("div");

    alumniTable.classList.add("grid","alumni-list")

    const header = document.createElement("div");
    header.classList.add("grid","text-dark","ff-body","fs-400","alumni-list-row");
    header.setAttribute("id","alumni-header");

    const headerName = document.createElement("p");
    headerName.innerHTML = "Name";
    headerName.style.gridArea = "Name";
    header.appendChild(headerName);

    const headerPosition = document.createElement("p");
    headerPosition.innerHTML = "Position";
    headerPosition.style.gridArea = "Position";
    header.appendChild(headerPosition);

    const headercurrentInstitution = document.createElement("p");
    headercurrentInstitution.innerHTML = "Current Institution";
    headercurrentInstitution.style.gridArea = "currentInstitution";
    header.appendChild(headercurrentInstitution);

    const headercurrentPosition = document.createElement("p");
    headercurrentPosition.innerHTML = "Current Position";
    headercurrentPosition.style.gridArea = "currentPosition";
    header.appendChild(headercurrentPosition);

    const headeremail = document.createElement("p");
    headeremail.innerHTML = "email";
    headeremail.style.gridArea = "email";
    header.appendChild(headeremail);

    const title = document.createElement("h2");
    title.innerHTML = "Graduate Students and Postdoctoral Fellows";
    title.classList.add("text-dark","ff-body","fs-500")
    title.style.marginBottom = "1rem";
    title.setAttribute("id","GraduateStudentsPostDoc")
    list.appendChild(title);

    alumniTable.appendChild(header);

    list.appendChild(alumniTable);

    const alumniHeader = document.getElementById("alumni-header-main");

    const link = document.createElement("div");
    link.innerHTML = "<a href='#GraduateStudentsPostDoc'>Graduate Students and Postdoctoral Fellows</a>";
    link.classList.add("ff-body","text-dark","alumni-link");
    alumniHeader.appendChild(link);

    for (let i = 0; i < data.length; i++){
        const newAlumni = document.createElement("div");
        newAlumni.classList.add("ff-body","text-dark","fs-200","grid","alumni-list-row");

        const newAlumniName = document.createElement("p");
        newAlumniName.style.gridArea = "Name";
        newAlumniName.style.fontWeight= "bold"
        newAlumniName.innerHTML = data[i].name;
        newAlumni.appendChild(newAlumniName);

        const newAlumniPosition = document.createElement("p");
        newAlumniPosition.style.gridArea = "Position";
        newAlumniPosition.style.fontStyle= "italic";
        newAlumniPosition.innerHTML = "<span class='alumni-subtitle'>(</span>" + data[i].groupPosition + "<span class='alumni-subtitle'>)</span>";
        newAlumni.appendChild(newAlumniPosition);

        const newAlumniCurrentInstitution = document.createElement("p");
        newAlumniCurrentInstitution.style.gridArea = "currentInstitution";
        newAlumniCurrentInstitution.innerHTML = "<span class='alumni-subtitle'>Current Institution:</span>" + " " + data[i].currentInstitution;
        newAlumni.appendChild(newAlumniCurrentInstitution);

        const newAlumniCurrentPosition = document.createElement("p");
        newAlumniCurrentPosition.style.gridArea = "currentPosition";
        newAlumniCurrentPosition.innerHTML = "<span class='alumni-subtitle'>Current Position:</span>" + " " + data[i].currentPosition;
        newAlumni.appendChild(newAlumniCurrentPosition);

        const newAlumniEmail = document.createElement("p");
        newAlumniEmail.style.gridArea = "email";
        newAlumniEmail.style.overflowWrap = "break-word";
        newAlumniEmail.innerHTML = "<a href='mailto:" + data[i].email + "'>" + data[i].email + "</a>";
        newAlumni.appendChild(newAlumniEmail);

        alumniTable.appendChild(newAlumni);
    }
}

// function addDataPostdocs(data){
//     const list = document.getElementById("alumni-list");
//     const alumniTable = document.createElement("div");

//     alumniTable.classList.add("grid","alumni-list")

//     const header = document.createElement("div");
//     header.classList.add("grid","text-dark","ff-body","fs-400","alumni-list-row");
//     header.setAttribute("id","alumni-header");

//     const headerName = document.createElement("p");
//     headerName.innerHTML = "Name";
//     headerName.style.gridArea = "Name";
//     header.appendChild(headerName);

//     const headerPosition = document.createElement("p");
//     headerPosition.innerHTML = "Position";
//     headerPosition.style.gridArea = "Position";
//     header.appendChild(headerPosition);

//     const headercurrentInstitution = document.createElement("p");
//     headercurrentInstitution.innerHTML = "Current Institution";
//     headercurrentInstitution.style.gridArea = "currentInstitution";
//     header.appendChild(headercurrentInstitution);

//     const headercurrentPosition = document.createElement("p");
//     headercurrentPosition.innerHTML = "Current Position";
//     headercurrentPosition.style.gridArea = "currentPosition";
//     header.appendChild(headercurrentPosition);

//     const headeremail = document.createElement("p");
//     headeremail.innerHTML = "email";
//     headeremail.style.gridArea = "email";
//     header.appendChild(headeremail);

//     const title = document.createElement("h2");
//     title.innerHTML = "Postdoctoral Fellows";
//     title.classList.add("text-dark","ff-body","fs-500")
//     title.style.marginBottom = "1rem";
//     title.setAttribute("id","Postdocs")
//     list.appendChild(title);

//     alumniTable.appendChild(header);

//     list.appendChild(alumniTable);

//     const alumniHeader = document.getElementById("alumni-header-main");

//     const link = document.createElement("div");
//     link.innerHTML = "<a href='#Postdocs'>Postdoctoral Fellows</a>";
//     link.classList.add("ff-body","text-dark","alumni-link");
//     alumniHeader.appendChild(link);

//     for (let i = 0; i < data.length; i++){
//         const newAlumni = document.createElement("div");
//         newAlumni.classList.add("ff-body","text-dark","fs-200","grid","alumni-list-row");

//         const newAlumniName = document.createElement("p");
//         newAlumniName.style.gridArea = "Name";
//         newAlumniName.style.fontWeight= "bold"
//         newAlumniName.innerHTML = data[i].name;
//         newAlumni.appendChild(newAlumniName);

//         const newAlumniPosition = document.createElement("p");
//         newAlumniPosition.style.gridArea = "Position";
//         newAlumniPosition.style.fontStyle= "italic";
//         newAlumniPosition.innerHTML = "<span class='alumni-subtitle'>(</span>" + data[i].groupPosition + "<span class='alumni-subtitle'>)</span>";
//         newAlumni.appendChild(newAlumniPosition);

//         const newAlumniCurrentInstitution = document.createElement("p");
//         newAlumniCurrentInstitution.style.gridArea = "currentInstitution";
//         newAlumniCurrentInstitution.innerHTML = "<span class='alumni-subtitle'>Current Institution:</span>" + " " + data[i].currentInstitution;
//         newAlumni.appendChild(newAlumniCurrentInstitution);

//         const newAlumniCurrentPosition = document.createElement("p");
//         newAlumniCurrentPosition.style.gridArea = "currentPosition";
//         newAlumniCurrentPosition.innerHTML = "<span class='alumni-subtitle'>Current Position:</span>" + " " + data[i].currentPosition;
//         newAlumni.appendChild(newAlumniCurrentPosition);

//         const newAlumniEmail = document.createElement("p");
//         newAlumniEmail.style.gridArea = "email";
//         newAlumniEmail.style.overflowWrap = "break-word";
//         newAlumniEmail.innerHTML = "<a href='mailto:" + data[i].email + "'>" + data[i].email + "</a>";
//         newAlumni.appendChild(newAlumniEmail);

//         alumniTable.appendChild(newAlumni);
//     }
// }

function addDataVisitors(data){
    const list = document.getElementById("alumni-list");
    const alumniTable = document.createElement("div");

    alumniTable.classList.add("grid","alumni-list")

    const header = document.createElement("div");
    header.classList.add("grid","text-dark","ff-body","fs-400","alumni-list-row");
    header.setAttribute("id","alumni-header");

    const headerName = document.createElement("p");
    headerName.innerHTML = "Name";
    headerName.style.gridArea = "Name";
    header.appendChild(headerName);

    const headerPosition = document.createElement("p");
    headerPosition.innerHTML = "Position";
    headerPosition.style.gridArea = "Position";
    header.appendChild(headerPosition);

    const headercurrentInstitution = document.createElement("p");
    headercurrentInstitution.innerHTML = "Current Institution";
    headercurrentInstitution.style.gridArea = "currentInstitution";
    header.appendChild(headercurrentInstitution);

    const headercurrentPosition = document.createElement("p");
    headercurrentPosition.innerHTML = "Current Position";
    headercurrentPosition.style.gridArea = "currentPosition";
    header.appendChild(headercurrentPosition);

    const headeremail = document.createElement("p");
    headeremail.innerHTML = "email";
    headeremail.style.gridArea = "email";
    header.appendChild(headeremail);

    const title = document.createElement("h2");
    title.innerHTML = "Visitors";
    title.classList.add("text-dark","ff-body","fs-500")
    title.style.marginBottom = "1rem";
    title.setAttribute("id","Visitors")
    list.appendChild(title);

    alumniTable.appendChild(header);

    list.appendChild(alumniTable);

    const alumniHeader = document.getElementById("alumni-header-main");

    const link = document.createElement("div");
    link.innerHTML = "<a href='#Visitors'>Visitors</a>";
    link.classList.add("ff-body","text-dark","alumni-link");
    alumniHeader.appendChild(link);

    for (let i = 0; i < data.length; i++){
        const newAlumni = document.createElement("div");
        newAlumni.classList.add("ff-body","text-dark","fs-200","grid","alumni-list-row");

        const newAlumniName = document.createElement("p");
        newAlumniName.style.gridArea = "Name";
        newAlumniName.style.fontWeight= "bold"
        newAlumniName.innerHTML = data[i].name;
        newAlumni.appendChild(newAlumniName);

        const newAlumniPosition = document.createElement("p");
        newAlumniPosition.style.gridArea = "Position";
        newAlumniPosition.style.fontStyle= "italic";
        newAlumniPosition.innerHTML = "<span class='alumni-subtitle'>(</span>" + data[i].groupPosition + "<span class='alumni-subtitle'>)</span>";
        newAlumni.appendChild(newAlumniPosition);

        const newAlumniCurrentInstitution = document.createElement("p");
        newAlumniCurrentInstitution.style.gridArea = "currentInstitution";
        newAlumniCurrentInstitution.innerHTML = "<span class='alumni-subtitle'>Current Institution:</span>" + " " + data[i].currentInstitution;
        newAlumni.appendChild(newAlumniCurrentInstitution);

        const newAlumniCurrentPosition = document.createElement("p");
        newAlumniCurrentPosition.style.gridArea = "currentPosition";
        newAlumniCurrentPosition.innerHTML = "<span class='alumni-subtitle'>Current Position:</span>" + " " + data[i].currentPosition;
        newAlumni.appendChild(newAlumniCurrentPosition);

        const newAlumniEmail = document.createElement("p");
        newAlumniEmail.style.gridArea = "email";
        newAlumniEmail.style.overflowWrap = "break-word";
        newAlumniEmail.innerHTML = "<a href='mailto:" + data[i].email + "'>" + data[i].email + "</a>";
        newAlumni.appendChild(newAlumniEmail);

        alumniTable.appendChild(newAlumni);
    }
}

function executeAsynchronously(functions, timeout) {
    for(var i = 0; i < functions.length; i++) {
      setTimeout(functions[i], timeout);
    }
  }

executeAsynchronously(
    [fetchUndergrads,fetchGradsPostDocs,fetchVisitors], 10);