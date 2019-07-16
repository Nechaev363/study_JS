'use strict';

function DomElement (selector, height, width, backgroundColor,fontSize ) { // создал конструктор с элементами
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.backgroundColor = backgroundColor;
    this.fontSize = fontSize;
    
}


DomElement.prototype.ride = function () { // записываю в констуртор с div' условие
    if(this.selector[0] === '.') { // если selector равен точко
    let div = document.createElement('div'); // тогда создать элемент div
    div.style.cssText = `
    selector: ${this.selector};
    height: ${this.height}px;
    width: ${this.width}px;
    backgroundColor: ${this.backgroundColor};
    fontSize: ${this.fontSize}px; // задали стили
    
    `;
    document.body.appendChild(div); // вывели div в body
}
    
};

DomElement.prototype.ride = function () { // тоже самое, что и с div)
    if(this.selector[0] === '#') {
    let p = document.createElement('p');
    p.style.cssText = `
    selector: ${this.selector};
    height: ${this.height}px;
    width: ${this.width}px;
    backgroundColor: ${this.backgroundColor};
    fontSize: ${this.fontSize}px;
    
    `;
    document.body.appendChild(p);
}
    
};


let forDiv = new DomElement ('.class', 200, 400, 'green', 14); //создал новый протопит, который будет получать параметры в скобках

let forP = new DomElement ('#id', 200, 400, 'green', 14);

forDiv.ride(); //вызвал функцию
forP.ride();