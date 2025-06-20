
let userList = JSON.parse(localStorage.getItem("users")) || [];
let editIndex = -1;

function Submit() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("pass").value.trim();
  const job = document.getElementById("job").value.trim();
  const ex = document.getElementById("ex").value.trim();

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passError").textContent = "";
  document.getElementById("jobError").textContent = "";
  document.getElementById("exError").textContent = "";

  let isValid = true;

  if (!name) {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  }
  if (!email) {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  }
  if (!pass) {
    document.getElementById("passError").textContent = "Password is required";
    isValid = false;
  }
  if (!job) {
    document.getElementById("jobError").textContent = "Job is required";
    isValid = false;
  }
  if (!ex) {
    document.getElementById("exError").textContent = "Experience is required";
    isValid = false;
  }

  if (!isValid) return;

  const user = { name, email, pass, job, ex };

  if (editIndex >= 0) {
    userList[editIndex] = user;
    localStorage.setItem("msg", "User updated successfully!");
  } else {
    userList.push(user);
    localStorage.setItem("msg", "User added successfully!");
  }

  localStorage.setItem("users", JSON.stringify(userList));
  localStorage.removeItem("editUser");
  localStorage.removeItem("editIndex");
  document.getElementById("form").reset();
  window.location.href = "table.html";
}

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
    const row = table.insertRow();
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.pass}</td>
      <td>${user.job}</td>
      <td>${user.ex}</td>
      <td>
        <button onclick="editUser(${index})">Edit</button>
        <button onclick="deleteUser(${index})">Delete</button>
      </td>
    `;
  });

  const msg = localStorage.getItem("msg");
  if (msg) {
    showMessage(msg, "green");
    localStorage.removeItem("msg");
  }
}

function editUser(index) {
  const user = userList[index];
  localStorage.setItem("editUser", JSON.stringify(user));
  localStorage.setItem("editIndex", index);
  window.location.href = "index.html";
}

function deleteUser(index) {
  if (confirm("Are you sure you want to delete this user?")) {
    userList.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(userList));
    showMessage("User deleted successfully!", "red");
    displayUsers();
  }
}

function showMessage(msg, color) {
  const msgDiv = document.getElementById("msg");
  msgDiv.textContent = msg;
  msgDiv.style.color = color;
  msgDiv.style.margin = "10px 0";
  setTimeout(() => {
    msgDiv.textContent = "";
  }, 3000);
}

// Load users or pre-fill form
// let userList = JSON.parse(localStorage.getItem("users")) || [];


function Submit() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("pass").value.trim();
  const job = document.getElementById("job").value.trim();
  const ex = document.getElementById("ex").value.trim();

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passError").textContent = "";
  document.getElementById("jobError").textContent = "";
  document.getElementById("exError").textContent = "";

  let isValid = true;

  if (!name) {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  }
  if (!email) {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  }
  if (!pass) {
    document.getElementById("passError").textContent = "Password is required";
    isValid = false;
  }
  if (!job) {
    document.getElementById("jobError").textContent = "Job is required";
    isValid = false;
  }
  if (!ex) {
    document.getElementById("exError").textContent = "Experience is required";
    isValid = false;
  }

  if (!isValid) return;

  const user = { name, email, pass, job, ex };

  if (editIndex >= 0) {
    userList[editIndex] = user;
    localStorage.setItem("msg", "User updated successfully!");
  } else {
    userList.push(user);
    localStorage.setItem("msg", "User added successfully!");
  }

  localStorage.setItem("users", JSON.stringify(userList));
  localStorage.removeItem("editUser");
  localStorage.removeItem("editIndex");
  document.getElementById("form").reset();
  window.location.href = "table.html";
}

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
    const row = table.insertRow();
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.pass}</td>
      <td>${user.job}</td>
      <td>${user.ex}</td>
      <td>
       <button style="background-color: Green; color: white; border: none; padding: 5px 10px; border-radius: 5px;" onclick="editUser(${index})">Edit</button>
      <button style="background-color: red; color: white; border: none; padding: 5px 10px; border-radius: 5px;" onclick="deleteUser(${index})">Delete</button>

      </td>
    `;
  });

  const msg = localStorage.getItem("msg");
  if (msg) {
    showMessage(msg, "green");
    localStorage.removeItem("msg");
  }
}

function editUser(index) {
  const user = userList[index];
  localStorage.setItem("editUser", JSON.stringify(user));
  localStorage.setItem("editIndex", index);
  window.location.href = "index.html";
}

function deleteUser(index) {
  if (confirm("Are you sure you want to delete this user?")) {
    userList.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(userList));
    showMessage("User deleted successfully!", "red");
    displayUsers();
  }
}

function showMessage(msg, color) {
  const msgDiv = document.getElementById("msg");
  msgDiv.textContent = msg;
  msgDiv.style.color = color;
  msgDiv.style.margin = "10px 0";
  setTimeout(() => {
    msgDiv.textContent = "";
  }, 3000);
}

// Load users or pre-fill form
window.onload = function () {
  const editUserData = JSON.parse(localStorage.getItem("editUser"));
  const index = localStorage.getItem("editIndex");

  if (editUserData && document.getElementById("form")) {
    document.getElementById("name").value = editUserData.name;
    document.getElementById("email").value = editUserData.email;
    document.getElementById("pass").value = editUserData.pass;
    document.getElementById("job").value = editUserData.job;
    document.getElementById("ex").value = editUserData.ex;
    editIndex = parseInt(index);
  }

  if (document.querySelector("table")) {
    displayUsers();
  }
};




