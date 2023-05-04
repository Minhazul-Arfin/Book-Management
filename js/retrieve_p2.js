function sliceData(data){
    console.log(data);
}


function retrieveData() {

    var client = new XMLHttpRequest();
    client.open('GET', 'Dataset.txt');
    client.onreadystatechange = function () {
        // alert(client.responseText);
        sliceData(client.responseText);
    }
    client.send();
}


document.getElementById('book-list-btn').addEventListener('click', function(){
    retrieveData();
    
})
