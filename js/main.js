
let switchCheck=document.querySelector('#SwitchCheck');
let sections=document.querySelectorAll('section');
let paths=document.querySelectorAll('path');

/* console.log(sections);

console.log(switchCheck); */

switchCheck.addEventListener('click', () => toggleThemes());

function toggleThemes() {
    paths.forEach(path => {
        if (path.getAttribute('fill') == '#f5f5f5'){
        path.setAttribute('fill','#000')   
        } else {
        path.setAttribute('fill','#f5f5f5') 
        }
    });
    sections.forEach(section => {
        section.classList.toggle('bg-dark');
    });
}