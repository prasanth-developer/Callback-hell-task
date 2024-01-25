

let num = 10;

const countDown = document.querySelector('.header');

setInterval(() => {
    if(num>0){
        let countDown_num = num;
        countDown.innerHTML = `${countDown_num}`;
    }else{
        countDown.innerHTML = "Happy Independence Day";
    }
    num--;
        
}, 1000);
