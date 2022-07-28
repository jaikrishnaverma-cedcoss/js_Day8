var empDetails=[];
function detailsSubmit()
{
    let id=document.getElementById('inputId').value;
    let name =document.getElementById('inputName').value;
    let sal=document.getElementById('inputSal').value;
    // let tb=document.getElementById('tbody1');
    let pushable={id:id,name:name,sal:sal};
    empDetails.push(pushable);
    render(empDetails,'tbody1');
    var obj1 = new Employee(id,name,sal);
    obj1.display('tbody2');
    console.log(empDetails);

}
function render(arrTrack,classNam)
{
    let temp="";
    for(let i=0;i<arrTrack.length;i++)
    {
         temp+="<tr>";
        for (const key in arrTrack[i]) {
            temp+='<td>'+arrTrack[i][key]+'</td>';
            // console.log(`${key}: ${user[key]}`);
        }
        if(classNam=='tbody1')
          temp+='<td> <a onclick="action()" href="#">Delete</a></td>';
        temp+='</tr>';
    }
    document.getElementById(classNam).innerHTML=temp;
}
class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
     display(classNam)
    {
        let temp="";
    
             temp+='<tr><td>'+this.id+'</td><td>'+this.name+'</td><td>'+this.salary+'</td>';
   
            // if(classNam=='tbody1')
            //   temp+='<td> <a onclick="action()" href="#">Delete</a></td>';
            temp+='</tr>';
        
        document.getElementById(classNam).innerHTML=temp;
    }
}


