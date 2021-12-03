const addForm = document.querySelector('.add');
const button = document.querySelector('.button');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
    <li>
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;
}

//add function
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.input.value.trim();
    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();
    };

})

button.addEventListener('click', () => {
    const todo = addForm.input.value.trim();
    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();
    };
})
//delete function
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

//search function
const filterTodos = term => {
    [...list.children]
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('hide'));
    
    [...list.children]
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('hide'));
}

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});