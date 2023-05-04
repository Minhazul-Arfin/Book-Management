var serial = 1;


// saving data for further use
function validateInput(Content) {
    alert("Save your Data?");
    // Create and save the file using the FileWriter library
    saveAs(Content, "Dataset.txt");
}



// event listener for get all data
document.getElementById("add-book-btn").addEventListener('click', function () {
    // console.log('button clicked')
    // catching elements using their id

    const nameField = document.getElementById('name-field');
    const PnameField = document.getElementById('Pname-field');
    const ageField = document.getElementById('age-field');
    const dateField = document.getElementById('date-field');
    const pageField = document.getElementById('page-field');

    // catching checkbox also
    const scifiField = document.getElementById('scifi-field');
    const dramaField = document.getElementById('drama-field');
    const novelField = document.getElementById('novel-field');

    // finding values of each field
    const nameValue = nameField.value;
    const PnameValue = PnameField.value;
    const ageValue = ageField.value;
    const dateValue = dateField.value;
    const pageValue = pageField.value;

    // const sicfiValue = scifiField.value;
    // const dramaValue = dramaField.value;
    // const novelValue = novelField.value;


    // console.log(novelValue);



    // Create blob object with file content
    var Content = new Blob([serial, ",", nameValue, ",", PnameValue, ",", ageValue, ",", dateValue, ",", pageValue], {
        type: "text/plain;charset=utf-8",
    });
    serial += 1;
    validateInput(Content);
    

})



