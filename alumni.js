fetch("alumni.json")
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        addData(data);
    })
    .catch(function (err) {
        console.log(err);
    })


function addData(data){
    const list = document.getElementById("alumni-list");

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

        list.appendChild(newAlumni);
    }
}