// 1. შექმენით html ფაილში <div id="board"></div> ელემენტი. ამ ელემენტს CSS იდან განუსაზღვრეთ display: flex; flex-wrap: wrap;  ასევე დასვით ეკრანის შუაგულში. 
function createDiv() {
    let div = document.createElement('div');
    div.id = 'board';
    return div;
}
// 2. შექმენით ფუნქცია createCell რომელიც პარამეტრად მიიღებს ორ რიცხვს (width, height), შექმნის div ელემენტს რომელსაც ექნება კლასი cell და ასევე ამ ელემენტის სიგანე იქნება width პარამეტრის მნიშვნელობა ხოლო სიმაღლე height პარამეტრის მნიშვნელობა.
// გაითვალისწინეთ, რომ აუცილებელია რიცხვს ბოლოში მიამატოთ 'px' სტრინგი რათა მიიღოთ css ისთვის გასაგები მნიშვნელობა. მაგალითად: div.style.width = w + 'px';
// ამ ელემენტის innerText ველს მიანიჭეთ 0 რათა თითოეულ უჯრედში თავიდან ეწეროს რიცხვი 0; 
// CSS -ში აღწერეთ .cell კლასი რომელსაც ექნება box-sizing: border-box; ასევე ექნება 1 პიქსელიანი ჩარჩო;

function getRandomNumber(){
    return Math.floor(Math.random() * 20);
}
function createCell (width, height) {
    let div = document.createElement('div');
    div.className = 'cell';
    div.style.width = width + 'px';
    div.style.height = height + 'px';
    // div.innerText = 0;
    div.innerText = getRandomNumber();
    return div;
}
// let createCells = createCell(50, 50);
// document.body.appendChild(createCells)

// 3. შექმენით ფუნქცია addCells, რომელიც პარამეტრად მიიღებს ორ რიცხვს w და h. w - უნდა მიანიჭოს #board ელემენტის სიგანეს, ხოლო h - მიანიჭოს #board ელემენტის სიმაღლეს. ფუნქციამ უნდა გამოთვალოს რამდენი 100 პიქსელიანი სიმაღლისა და სიგანის მქონე უჯრედი ჩაეტევა ამ ზომის ელემენტში და შესაბამისად ციკლის გამოყენებით შექმნას იმდენი .cell ელემენტი createCell ფუნქციით (რომელსაც გადასცემს 100 და 100 სიგანეს და სიმაღლეს).
// მაგალითად თუ ფუნქციამ მიიღო პარამეტრად 400 და 500 ეს ნიშნავს, რომ მასში ჩაეტევა 20 ცალი 100 პიქსელიანი უჯრედი. შესაბამისად უნდა შექმნას ციკლის გამოყენებით 20 div ელემენტი და ჩაამატოს ეს ელემენტები #board ელემენტში.
function addCells(w, h) {
    let divBoard = createDiv();
    document.body.appendChild(divBoard);
    divBoard.style.width = w + 'px';
    divBoard.style.height = h + 'px';
    let i;
    for (i = 0; i < ((w * h) / 10000); i++) {
        divBoard.appendChild(createCell(100, 100));
    }
    console.log("number of cells = " + i);
    return divBoard;
}
// addCells(400, 500);
// 4. html ში შექმენით ღილაკი <button id="start">Start</button> რომელზე დაჭერის შემდეგაც გამოიძახებთ ფუნქციას addCells და გადასცემთ ნებისმიერ 100 ის ჯერად რიცხვებს პარამეტრად.
function createButton(x, y) {
    if (x % 100 === 0 && y % 100 === 0 ) {
        let button = document.createElement('button');
        document.body.appendChild(button);
        button.id = 'start';
        button.innerText = 'click here';
        button.addEventListener('click', function () {
            addCells(x, y);
        });
        return button;
    }
}
// createButton(400, 500);

// 5. შექმენით ფუნქცია addCounter რომელიც მასივში ჩაწერს ყველა .cell ელემენტს (let cells = document.querySelectorAll('.cell')) შემდეგ გაივლის ამ მასივში და თითოეულ ელემენტს მიამაგრებს click ივენთს ისე, რომ ამ ელემენტზე დაჭერისას მასში ჩაწერილი რიცხვი უნდა გაიზარდოს. მაგალითად თუ ელემენტში წერია რიცხვი 0, დაჭერის შემდეგ გახდეს 1, კიდევ დაჭერის შემდეგ 2 და ა.შ.

function addCounter(x, y) { 
    addCells(x, y);
    let cells = document.querySelectorAll('.cell')
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function () {
            this.innerText = parseInt(this.innerText) + 1;
        })
    }
    return cells;
}
// addCounter();
// 6*. შექმენით ფუნქცია checkSum, რომელიც ყოველი .cell ღილაკზე დაჭერის შემდეგ შეამოწმებს არის თუ არა ყველა უჯრაში ჩაწერილ ციფრთა ჯამი 100 ის ტოლი და თუ 100 ის ტოლია წაშლის ყველა .cell ელემენტს და გამოიძახებს  addCells ფუნქციას ახლიდან რათა ახლიდან დაგენერირდეს უჯრები.
