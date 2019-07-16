'use strict';

function DomElement (selector, height, width, backgroundColor,fontSize ) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.backgroundColor = backgroundColor;
    this.fontSize = fontSize;
    
}


DomElement.prototype.ride = function () {
    if(this.selector === ' . ') { 
    let div = document.createElement('div');
    div.style.cssText = `
    selector: ${this.selector};
    height: ${this.height}px;
    width: ${this.width}px;
    backgroundColor: ${this.backgroundColor};
    fontSize: ${this.fontSize}px;
    
    `;
}
    document.body.appendChild(div);
};

DomElement.prototype.ride = function () {
    if(this.selector === ' # ') {
    let p = document.createElement('p');
    p.style.cssText = `
    selector: ${this.selector};
    height: ${this.height}px;
    width: ${this.width}px;
    backgroundColor: ${this.backgroundColor};
    fontSize: ${this.fontSize}px;
    
    `;
}
    document.body.appendChild(p);
};


let forDiv = new DomElement ('.class', 200, 400, 'green', 14);

let forP = new DomElement ('#id', 200, 400, 'green', 14);

forDiv.ride();
forP.ride();