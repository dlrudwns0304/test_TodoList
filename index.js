const chk = document.querySelector('.wrap1 input');
const btn = document.querySelector('button');
console.log(chk,btn,);

btn.addEventListener('click',()=>{
    if(chk.value == '') {
        alert('할일을 입력하세요')
    }
})