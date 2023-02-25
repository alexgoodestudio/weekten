document.getElementById('create').addEventListener('click',() =>{
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.insertCell(0).innerHTML = document.getElementById('first-name').value;
    row.insertCell(1).innerHTML = document.getElementById('last-name').value;
    row.insertCell(2).innerHTML = document.getElementById('phone-number').value;
    actions.appendChild;
}); 



