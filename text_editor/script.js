let today = new Date();
let year = today.getFullYear(); 
let month = today.getMonth() + 1;
let date = today.getDate();

function get_date() {
    let textarea = document.querySelector('textarea');
    let dateWrite = document.createElement('div');

    dateWrite.innerHTML = `<time>${year}년 ${month}월 ${date}일</time>`;
}