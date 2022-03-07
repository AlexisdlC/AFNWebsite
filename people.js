// Fetching the people.json file containing the list and data about current members

// Json file should be in the format [{"Name":'',"Position":'',"Office":'',"email":'',"picture":''}]. See current file and copy/paste existing member to add more members.

// "picture" should be only the file name, and it should be placed in the folder /assets/people/"

fetch("people.json")
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        addData(data);
    })
    .catch(function (err) {
        console.log(err);
    })

// addData function: run if file is found to generate the html using data found in json file

function addData(data) {
    // get the html parent element that will hold all the individual members' info

    const main = document.getElementById("group-members");

    // Loop through json file
    for (let i = 0; i < data.length; i++){

        //Create individual div for new member
        let newPerson = document.createElement("div");
        newPerson.classList.add("people-element","flex");

        //Create picture element to hold member's picture
        let newPersonPictureCont = document.createElement("picture");
        newPersonPictureCont.classList.add("people-image");

        let newPersonPicture = document.createElement("img");
        newPersonPicture.src = "./assets/people/" + data[i].picture;
        newPersonPicture.alt = data[i].Name;
        newPersonPictureCont.appendChild(newPersonPicture);

        //Create div to receive metadata about member
        let newPersonDiv = document.createElement("div");
        newPersonDiv.classList.add("people-meta");

        //Load and append info elements to metadata div
        let newPersonName = document.createElement("p");
        newPersonName.classList.add("people-name","text-dark","fs-400","ff-body")
        newPersonName.innerHTML = data[i].Name;
        newPersonDiv.appendChild(newPersonName);

        let newPersonPosition = document.createElement("p");
        newPersonPosition.classList.add("text-dark","fs-300","ff-body");
        newPersonPosition.innerHTML = data[i].Position;
        newPersonDiv.appendChild(newPersonPosition);

        let newPersonOffice = document.createElement("p");
        newPersonOffice.classList.add("text-dark","fs-300","ff-body");
        newPersonOffice.innerHTML = "Office: " + data[i].Office;
        newPersonDiv.appendChild(newPersonOffice);

        let newPersonEmail = document.createElement("p");
        newPersonEmail.classList.add("text-dark","fs-300","ff-body");
        newPersonEmail.style.overflowWrap = "break-word"
        newPersonEmail.innerHTML = "email: <a href = 'mailto:" + data[i].email +"' style = 'overflow-wrap: break-word;'>"+data[i].email + "</a>";
        newPersonDiv.appendChild(newPersonEmail);

        //Append metadata div and picture element to individual div of member
        newPerson.appendChild(newPersonPictureCont);
        newPerson.appendChild(newPersonDiv);

        //Append individual div of member to main parent
        main.appendChild(newPerson);
    }
}

