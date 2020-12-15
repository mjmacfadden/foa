var down = document.getElementById('topic');

var arr = [
    "<a href='https://www.elliptigo.com/products/elliptigo-3c/' target='_blank'>The Eliptigo C3</a><br><span>S01E01</span>",
    "Quarantine Haircuts<br><span>S01E01</span>",
    "Sourdough Breadmaking<br><span>S01E01</span>",
    "Bidets<br><span>S01E02</span>",
    "Electricity Biscuits<br><span>S01E02</span>",
    "TikTok<br><span>S01E02</span>",
    "Indiana Jones 5<br><span>S01E02</span>",
    "Super 73 Electric Bike<br><span>S01E03</span>",
    "Adults Who Drink Milk<br><span>S01E03</span>",
    "Self Driving Cars<br><span>S01E03</span>",
    "Professional Wrestling<br><span>S01E03</span>"
];

function Lets_Play() {
    down.innerHTML = arr[Math.floor(Math.random() * arr.length)];
}