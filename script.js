// CRUD - Create, Read, Update, Delete

//Global Variables

/* function Submit(){
    var dataEntered = retrieveData();
    var readData = retrieveDataFromLocalStorage( dataEntered);
}//

function retrieveData(){
    var name1= document.getElementById("name").value;
   // var email= document.getElementById("email").value;
   // var password= document.getElementById("password").value;
    var job=document.getElementById("job").value;
    var exp= document.getElementById("exp").value;


    var arr =[name1,  job, exp]; //email, password//,
    return arr;
}

//data in localstorage

function retrieveDataFromLocalStorage(dataEntered){
    var n=localStorage.setItem("Name",dataEntered[0]);
   // var e=localStorage.setItem("Email",dataEntered[1]);
   // var p=localStorage.setItem("Password",dataEntered[2]);
    var j=localStorage.setItem("Job",dataEntered[3]);
    var ex=localStorage.setItem("Experience",dataEntered[4]);

}*/


let userList = JSON.parse(localStorage.getItem("users")) || [];

function displayUsers() {
    const table = document.querySelector("table");
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Job</th>
            <th>Experience</th>
            <th>Actions</th>
        </tr>
    `;

    userList.forEach((user, index) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.pass}</td>
            <td>${user.job}</td>
            <td>${user.ex}</td>
            <td>
                <button class="editBtn" onclick="editUser(${index})">Edit</button>
                <button class="deleteBtn" onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
    });
}

function Submit() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("pass").value.trim();
    const job = document.getElementById("job").value.trim();
    const ex = document.getElementById("ex").value.trim();



    if (!name || !email || !pass || !job || !ex) {
       //console.error("Please fill all fields");
      // alert("Please fill all fields");
    //  document.getElementById("")
    showMessage("Please fill all fields", "error");
      
   return;
  } 

    if (editIndex >= 0) {
        userList[editIndex] = { name, email, pass, job, ex };
       editIndex = -1;
   } else {
       userList.push({ name, email, pass, job, ex });
  }

    localStorage.setItem("users", JSON.stringify(userList));
    document.getElementById("form").reset();
    displayUsers();
}
let editIndex = -1;
function editUser(index) {
    const user = userList[index];
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;
    document.getElementById("pass").value = user.pass;
    document.getElementById("job").value = user.job;
    document.getElementById("ex").value = user.ex;
    editIndex = index;
}

function deleteUser(index) {
    if (confirm) {
        userList.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(userList));
        displayUsers();
    }
}

// Load table when page loads
window.onload = displayUsers;
