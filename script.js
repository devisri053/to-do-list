<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () 
{
  let add = document.getElementById("enter");
  let selected = document.getElementById("selected");
  let dall = document.getElementById("all");
  let input = document.getElementById("inp");
  let list = document.getElementById("list");
  let com_count = document.getElementById("c_count");
  let total = document.getElementById("t_count");

  add.onclick = function () 
  {
    if (input.value.trim() === "") 
    {
        alert("Task cannot be empty");
        return;
    }

      // Increment total tasks count
      total.innerText = parseInt(total.innerText) + 1;

      let li = document.createElement("li");

      let checkbox = document.createElement("button");
      checkbox.innerText = "⬜";
      checkbox.style.marginLeft = "20px";
      checkbox.style.border="none";
      checkbox.style.background  = "none";
      checkbox.style.cursor = "pointer";


      let taskText = document.createElement("span");
      taskText.innerText = input.value;

      let deleteBtn = document.createElement("button");
      deleteBtn.innerText = "🗑️";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.style.cursor = "pointer";

      
      li.append(checkbox, taskText, deleteBtn);
      list.appendChild(li);
      input.value = "";

      checkbox.addEventListener("click", () => {
          if (checkbox.innerText === "⬜") {
                checkbox.innerText = "✔️";
              taskText.style.textDecorationLine = "line-through";
              com_count.innerText = parseInt(com_count.innerText) + 1;
          } else {
            checkbox.innerText = "⬜";
              taskText.style.textDecorationLine = "none";
              com_count.innerText = parseInt(com_count.innerText) - 1;
          }
      });

      deleteBtn.onclick = function () {
          list.removeChild(li);
          total.innerText = parseInt(total.innerText) - 1;
          if (checkbox.innerText === "✔️") {
              com_count.innerText = parseInt(com_count.innerText) - 1;
          }
      };
  };
      

  selected.onclick = function () {
      let items = document.querySelectorAll("#list li");
      items.forEach(li => {
          let checkbox = li.querySelector("button:first-child");
          if (checkbox.innerText === "✔️") {
              list.removeChild(li);
              total.innerText = parseInt(total.innerText) - 1;
              com_count.innerText = parseInt(com_count.innerText) - 1;
          }
      });
  };

  dall.onclick = function () {
      list.innerHTML = "";
      com_count.innerText = 0;
      total.innerText = 0;
  };

  if (list.innerHTML === "") {
      com_count.innerText = 0;
      total.innerText = 0;
  };
});
=======
document.addEventListener("DOMContentLoaded", function () 
{
  let add = document.getElementById("enter");
  let selected = document.getElementById("selected");
  let dall = document.getElementById("all");
  let input = document.getElementById("inp");
  let list = document.getElementById("list");
  let com_count = document.getElementById("c_count");
  let total = document.getElementById("t_count");

  add.onclick = function () 
  {
    if (input.value.trim() === "") 
    {
        alert("Task cannot be empty");
        return;
    }

      // Increment total tasks count
      total.innerText = parseInt(total.innerText) + 1;

      let li = document.createElement("li");

      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      let taskText = document.createElement("span");
      taskText.innerText = input.value;

      let deleteBtn = document.createElement("button");
      deleteBtn.innerText = "🗑️";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.style.cursor = "pointer";

      
      li.append(checkbox, taskText, deleteBtn);
      list.appendChild(li);
      input.value = "";

      checkbox.addEventListener("change", () => {
          if (checkbox.checked) {
              taskText.style.textDecorationLine = "line-through";
              com_count.innerText = parseInt(com_count.innerText) + 1;
          } else {
              taskText.style.textDecorationLine = "none";
              com_count.innerText = parseInt(com_count.innerText) - 1;
          }
      });

      deleteBtn.onclick = function () {
          list.removeChild(li);
          total.innerText = parseInt(total.innerText) - 1;
          if (checkbox.checked) {
              com_count.innerText = parseInt(com_count.innerText) - 1;
          }
      };
  };
      

  selected.onclick = function () {
      let items = document.querySelectorAll("#list li");
      items.forEach(li => {
          let checkbox = li.querySelector("input[type='checkbox']");
          if (checkbox.checked) {
              list.removeChild(li);
              total.innerText = parseInt(total.innerText) - 1;
              com_count.innerText = parseInt(com_count.innerText) - 1;
          }
      });
  };

  dall.onclick = function () {
      list.innerHTML = "";
      com_count.innerText = 0;
      total.innerText = 0;
  };

  if (list.innerHTML === "") {
      com_count.innerText = 0;
      total.innerText = 0;
  };
});
>>>>>>> f7d31acafc97c1ac6a06d64f3a2adecad1f7ebf7
