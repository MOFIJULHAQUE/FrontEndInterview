const submitBtn = document.querySelector("#submitBtn");

function setLocalStorage() {
  if (localStorage.getItem("userData")) {
    let showDiv = document.querySelector("#show");
    showDiv.innerHTML = "";

    let arr = JSON.parse(localStorage.getItem("userData"));

    //Here data  get to render
    arr.forEach((user, id) => {
      let newDiv = document.createElement("div");

      newDiv.setAttribute("class", "newData");

      let htmlData = `
        Name :- <span>${user.name}</span>
        Password :- <span>${user.password}</span>
        <button onClick="onDelete(${id})" >Delete</button>
        <button onClick="onEdit(${id})" id="btnEdit">Edit</button>
        `;

      //How thw the should be showing
      newDiv.insertAdjacentHTML("afterbegin", htmlData);
      showDiv.insertAdjacentElement("afterbegin", newDiv);
    });
    //
  } else {
    let arr = [];
    let arrData = {
      name: "",
      password: "",
    };
    arr.push(arrData);
    localStorage.setItem("userData", JSON.stringify(arr));
    // alert("Data is pushed");
  }
}
//
setTimeout(() => {
  setLocalStorage();
}, 3);

//CRUD operation add submit / add function
submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); //stops the automatic form refreash

  let arr = JSON.parse(localStorage.getItem("userData"));

  let name = document.querySelector("#name").value; // got the value of input

  let password = document.querySelector("#password").value; // got the value of input

  if (name.length <= 0 && password.length <= 0) {
    alert("Empty todo can't be submitted");
  } else if (name.length > 0 && password.length > 0) {
    let arrData = {
      name: name,
      password: password,
    };
    arr.push(arrData);
    localStorage.setItem("userData", JSON.stringify(arr));
    setLocalStorage();
    alert("Data added successfully");
  } else {
    alert("Empty todo can't be submitted");
  }
});

//delete opeartion

function onDelete(id) {
  let arr = JSON.parse(localStorage.getItem("userData"));

  let deleteData = [...arr];

  deleteData.splice(id, 1);

  arr = [...deleteData];

  localStorage.setItem("userData", JSON.stringify(arr));

  setLocalStorage();
}

//Edit operation-------------------------------------------------

function onEdit(id) {
  // alert("JG")
  let arr = JSON.parse(localStorage.getItem("userData"));

  let name = (document.querySelector("#name").value = arr[id].name);

  let password = (document.querySelector("#password").value = arr[id].password);

  submitBtn.setAttribute("disabled", true);

  let editBtn = document.createElement("button");

  let form = document.querySelector("#form");

  let btnEdit = document.querySelectorAll("#btnEdit");

  editBtn.innerHTML = "UPDATE";

  btnEdit.forEach((element) => {
    element.setAttribute("disabled", true);
  });
  form.insertAdjacentElement("beforeend", editBtn);

  editBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let newName = document.querySelector("#name");
    let newPassword = document.querySelector("#password");

    arr.splice(id, 1, { name: newName.value, password: newPassword.value });

    localStorage.setItem("userData", JSON.stringify(arr));

    setLocalStorage();

    newName.value = "";

    newPassword.value = "";

    form.removeChild(form.lastElementChild);

    submitBtn.removeAttribute("disabled");
  });
}
