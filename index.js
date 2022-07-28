
var empDetails = [];
var arrayOfObjects = [];
var obj1;
function detailsSubmit() {
    let id = document.getElementById('inputId').value;
    let name = document.getElementById('inputName').value;
    let sal = document.getElementById('inputSal').value;
    if(sal<="0")
    debugger;
    // let tb=document.getElementById('tbody1');
    let pushable = { id: id, name: name, sal: sal };
    empDetails.push(pushable);

    // through object
    render(empDetails, 'tbody1');
    obj1 = new Employee(id, name, sal);
    obj1.display('tbody2');
    obj1.display('tbody4');


}
function render(arrTrack, classNam) {
    let temp = "";
    for (let i = 0; i < arrTrack.length; i++) {
        temp += "<tr>";
        for (const key in arrTrack[i]) {
            temp += '<td>' + arrTrack[i][key] + '</td>';
            // console.log(`${key}: ${user[key]}`);
        }
        if (classNam == 'tbody1')
            temp += '<td> <a onclick="action()" href="#">Delete</a></td>';
        temp += '</tr>';
    }
    document.getElementById(classNam).innerHTML = temp;
}
class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        var pushable = { id: id, name: name, salary: salary };
        arrayOfObjects.push(pushable);
    }
    display(classNam) {
        let temp = "";
        temp += '<tr><td>' + this.id + '</td><td>' + this.name + '</td><td>' + this.salary + '</td>';
        // if(classNam=='tbody1')
        //   temp+='<td> <a onclick="action()" href="#">Delete</a></td>';
        temp += '</tr>';
        document.getElementById(classNam).innerHTML += temp;
        temp = "";
    }
    jsonChange(jsondata) {
        var jsonObj = JSON.parse(jsondata);
        this.id = jsonObj.id;
        this.name = jsonObj.name;
        this.salary = jsonObj.salary;
        }
}

function arrowfun() {
    var arr = empDetails.map((x) => x.sal = x.sal * 15 / 100);
    let temp = "";
    for (let i = 0; i < empDetails.length; i++) {
        temp += "<tr>";
        temp += '<td>' + empDetails[i].name + '</td><td>' + empDetails[i].sal + '</td>';
        // console.log(`${key}: ${user[key]}`);
        temp += '</tr>';
    }
    document.getElementById('tbody3').innerHTML = temp;
}

function changeObjvalue() {
    document.getElementById('tbody4').innerHTML = "";
    obj1.jsonChange('{"id":"01jai","name":"Jai verma","salary":"1030"}');
    obj1.display('tbody4');
}