document.addEventListener('DOMContentLoaded', function() {
    const formEl = document.querySelector(".form");
    const inputEl = document.querySelector(".input");
    const ulEl = document.querySelector(".list");

    formEl.addEventListener('submit', function(event) {
        event.preventDefault()
        const tasks = inputEl.value.trim()

        if (tasks !== '') {
            addTask(tasks)
            inputEl.value = ''
        }
    })

    function addTask(tasks) {
        const li = document.createElement('li')
        li.innerHTML = `
            <span>${tasks}</span>
            <i class="fas fa-check-square"></i>
            <i class="fas fa-trash"></i>
        `
        li.querySelector('.fa-check-square').addEventListener('click', () => {
            li.classList.toggle('checked')
        })
        li.querySelector('.fa-trash').addEventListener('click', () => {
            li.remove()
        })
        ulEl.appendChild(li)
    }
})