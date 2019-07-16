'use strict';

function DomElement (selector, height, width, bg, fontSize ) { // создал конструктор с элементами
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    
}


DomElement.prototype.ride = function () { // записываю в констуртор с div' условие
    if(this.selector[0] === '.') { // если selector равен точко
    let div = document.createElement('div'); // тогда создать элемент div
    document.body.appendChild(div);
    div.className = this.selector.slice(1);
    div.textContent = 'class';
    div.style.cssText = `
    
    height: ${this.height}px;
    width: ${this.width}px;
    background-color: ${this.bg};
    font-size: ${this.fontSize}px; // задали стили
    `;
     // вывели div в body

}
if(this.selector[0] === '#') {
    let p = document.createElement('p');
    document.body.appendChild(p);
    p.id = this.selector.slice(1);
    p.textContent = 'id';
    p.style.cssText = `
    
    height: ${this.height}px;
    width: ${this.width}px;
    background-color: ${this.bg};
    font-size: ${this.fontSize}px;
    `;
        
       
}

};



let forDiv = new DomElement ('.', 600, 700, 'red', 14); //создал новый протопит, который будет получать параметры в скобках

let forP = new DomElement ('#', 300, 500, 'green', 14);
//вызвал функцию
forP.ride();
forDiv.ride(); 