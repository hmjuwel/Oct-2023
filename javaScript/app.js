// date: 10 Dec, 2023
// author: HM Juwel

function countdownfunc() {
    const startDate = new Date('25 Mar, 2022 23:45:00').getTime();
    const today = new Date().getTime();
    const now = today - startDate;

    let s   = 1000;
    let m   = s * 60;
    let h   = m * 60;
    let d   = h * 24;
    let mo  = (d * 30.4167);
    let y   = mo * 12;

    const years     = Math.floor((now / y));
    const months    = Math.floor((now % y) / mo);
    const days      = Math.floor((now % mo) / d);
    const hours     = Math.floor((now % d) / h);
    const minutes   = Math.floor((now % h) / m);
    const seconds   = Math.floor((now % m) / s);
    
    displayData(years, months, days, hours, minutes, seconds);
}

function displayData(years, months, days, hours, minutes, seconds) {
    const ids = ['year-num', 'month-num', 'day-num', 'hour-num', 'minute-num', 'second-num'];
    const data = [years, months, days, hours, minutes, seconds];
    for(let i = 0; i <= ids.length; i++) {
        if(data[i] <= 9) {
            document.getElementById(ids[i]).innerHTML = `0${data[i]}`;
        } else if (data[i] > 9) {
            document.getElementById(ids[i]).innerHTML = data[i];
        }
        
    }
}
setInterval(countdownfunc, 1000);



const generate = document.getElementById('generate');
const txtClear = document.getElementById('Clear');
const txtCopy = document.getElementById('copy');
const generatingCls = document.getElementsByClassName('generating')[0];
const hiddenClm = document.getElementsByClassName('hidden')[0];
const textField = document.getElementById('text');
const counterField = document.getElementById('counter');
const copyRightyr = document.getElementById('yr');
      copyRightyr.innerText = new Date().getFullYear();

generate.onclick = function() {
    const text = document.getElementById('text').value;
    const counter = document.getElementById('counter').value;
    const displayText = document.getElementsByClassName('text-show')[0];
    const textArr = [];
    
    displayText.style.column = '4';
    displayText.innerHTML = '';
    const tmer = `<div id="countdown"></div>`;
    
    colum();
    if(counter <= 5000) {
      generatingCls.style.display = 'block';
        displayText.insertAdjacentHTML("afterbegin", tmer);
        generator(textArr, text, counter);
    setTimeout(()=> {
        displayText.innerHTML = '';
        displayText.insertAdjacentHTML("afterbegin", textArr.join(" "));
        generate.value = "Generated";
        hiddenClm.style.display = 'block';
        generatingCls.style.display = 'none';
        displayText.setAttribute('contenteditable', 'true');
    }, 5000);
    } else {
        alert('Only 5000 times.');
    }
    
}
function colum() {
    var timeleft = 4;
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Finished";
        } else {
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);
}
function generator(dT, txt, num) {

    for (let i = 0; i <= num; i++) {
        dT.push(
            `<p>${txt}</p>`
        );
    } 
}

textField.onclick = () => {
    textField.select();
    textField.setSelectionRange(0, 99999);
}

counterField.onclick = () => {
    counterField.select();
    counterField.setSelectionRange(0, 99999);
}

txtClear.onclick = () => {
    document.getElementsByClassName('text-show')[0].innerHTML = '';
    generate.value = "Generate";
    hiddenClm.style.display = 'none';
    document.getElementsByClassName('text-show')[0].removeAttribute('contenteditable');
}
txtCopy.onclick = () => {
    let text = document.getElementsByClassName('text-show')[0].innerHTML;
    let textCopier = document.getElementById('textCopier');
    let newText = text.replace(/[<p>|</p>]/gi, '');
    textCopier.value = newText;
    textCopier.select();
    textCopier.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textCopier.value);
    alert('Text Copied.');
}
function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }