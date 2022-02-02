init();

function init() {
    document
        .querySelector('form')
        .addEventListener('submit', addToDo);
    document
        .getElementById('clear')
        .addEventListener('click', clearTodoList);
    document
        .querySelector('ul')
        .addEventListener('click', deleteOrCheck);
}

function deleteOrCheck(e) {
    if (e.target.className == 'delete') 
        deleteToDo(e); // X 버튼을 누르면 목록에서 항목 삭제
    
else {
        checkToDo(e); // 체크박스를 클릭한 경우 글씨 색을 연하게 바꿔준다.
    }
}

function deleteToDo(e) { // X 버튼을 누르면 목록에서 항목 삭제
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);

}

function checkToDo(e) { // 체크박스를 클릭한 경우 글씨 색을 연하게 바꿔준다.
    const todo = e.target.nextSibling;

    if (e.target.checked) {
        todo.style.color = "#dddddd";
        todo.style.textDecoration = "line-through";

    } else {
        todo.style.color = "#000000";
        todo.style.textDecoration = "none";
    }

}

function clearTodoList(e) { //목록 전체 삭제하는 경우
    let ul = document
        .querySelector('ul')
        .innerHTML = '';
}

function addToDo(e) { //새로운 할 일 추가하는 경우
    e.preventDefault();
    let toDoValue = document.querySelector('input');
    if (toDoValue.value !== '') 
        addTask(toDoValue.value);
    toDoValue.value = ''; //입력창 비워주기
}

function addTask(value) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `<input type="checkbox"><label>${value}</label><span class="delete">x</span>`;
    ul.appendChild(li);

//    li.document.style.textAlign = "left";

    document
        .querySelector('.todolist')
        .style
        .display = 'block';

}
