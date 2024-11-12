class Element {
    constructor(innerTextInput) {
        this.innerText = innerTextInput;
        this.children = [];
    }
    addChild(child) {
        this.children.push(child);
    }
    removeChild(childToRemove) {
        this.children = this.children.filter(c => c !== childToRemove);
    }
    getChildren() {
        this.children.forEach(child => {
            console.log(child);
        });
    }
    setInnerText(text) {
        this.innerText = text;
    }
    getInnerText() {
        console.log(this.innerText);
    }
    render() {
        this.getInnerText();
        this.children.forEach(child => {
            child.render();
        });
    }
}
class Div extends Element {
    render() {
        console.log('Im a div');
        super.render();

    }
}
class H1 extends Element {
    render() {
        console.log('Im an h1');
        super.render();
    }
}

const div = new Div('a');
const h11 = new H1('b');
const h12 = new H1('c');
div.addChild(h11);
div.addChild(h12);
div.render();

div.setInnerText('new div inner text');
div.removeChild(h11);
div.render();