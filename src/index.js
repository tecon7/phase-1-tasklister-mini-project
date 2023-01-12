document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector('#create-task-form').addEventListener('submit', (event) => {
    event.preventDefault()
    const descriptionField = document.querySelector('#new-task-description')

    const taskList = document.querySelector('#tasks')
    const newTask = document.createElement('li')
    newTask.textContent = descriptionField.value

    const priority = document.querySelector('#priority')

    if (priority.value === 'High') {
      newTask.classList.add('red')
    } else if (priority.value === 'Medium') {
      newTask.classList.add('yellow')
    } else {
      newTask.classList.add('green')
    }

    newTask.classList.add(priority.value)
    
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'X'
    deleteButton.addEventListener('click', (event) => {
      newTask.remove()
    })
    newTask.append(deleteButton)
    taskList.append(newTask)


  })

})