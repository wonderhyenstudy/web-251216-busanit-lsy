//1 필요한 요소 선택. 
const input = document.getElementById('taskInput');
const btn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

//2 버튼 클릭 이벤트 리스너 설정. 
btn.addEventListener('click',function() {
    // 2-1 입력한 값 가져오기 
    const todo = input.value;

    // 2-2. 기본 유효성 검사. todo 내용이 비어 있으면, 실행 안함. 
    if(todo === "") {
        alert('할 일을 입력해주세요.')
        return; // function() { , 익명함수 실행을 중단. 
    }

    // 2-3 목록에 태그를 추가하기. 
    list.innerHTML += `<li> ${todo} </li>`

    // 2-4  입력창을 비우기 작업. 
    input.value = ""
})