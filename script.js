let a = '';
let b = '';
let sign = '';
let finish = false;
const el = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','*','/'];
const out = document.getElementById('.display');
function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}
const del = () => out.textContent = out.textContent.substring(0, out.textContent.length-1);

document.querySelector('.AC').onclick = clearAll;

document.querySelector('.&larr').onclick = del;

document.querySelector('.btn-box').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('←')) return;
    if(event.target.classList.contains('AC')) return;
    out.textContent = '';
    const key = event.target.textContent;
    if(el.includes(key)){
        if(b === '' && sign === ''){
            a += key;
            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }
    if (action.includes(key)){
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        return;
    }
    if (key === '='){
        if (b === '') b = a;
        switch (sign){
            case '+':
                a = a+b;
                break;
            case '-':
                a = a-b;
                break;
            case '*':
                a = a*b;
                break;
            case '/':
                a = a/b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }
}