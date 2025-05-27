document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("new-task-input");
  const addButton = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  addButton.addEventListener("click", addTask);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
  });

  function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;
    span.addEventListener("click", () => {
      span.classList.toggle("completed");
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "✕";
    removeBtn.className = "remove-btn";
    removeBtn.addEventListener("click", () => li.remove());

    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    input.value = "";
  }
});
