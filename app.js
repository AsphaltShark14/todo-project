const addForm = document.querySelector('.add');
const button = document.querySelector('.button');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
    const html = `
    <li>
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;
}

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

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})