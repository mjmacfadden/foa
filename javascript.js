var down = document.getElementById('topic');

var arr = [
    //SEASON 01 EPISODE 01
    "<a href='https://www.elliptigo.com/products/elliptigo-3c/' target='_blank'>The Eliptigo C3</a><br><span>S01E01</span>",
    "Quarantine Haircuts<br><span>S01E01</span>",
    "Sourdough Breadmaking<br><span>S01E01</span>",
    //SESAON 01 EPISODE 02
    "Bidets<br><span>S01E02</span>",
    "<a href='https://twitter.com/sageboggs/status/1242968530250870786?s=20' target='_blank'>Electricity Biscuits</a><br><span>S01E02</span>",
    "TikTok<br><span>S01E02</span>",
    "<a href='https://www.imdb.com/title/tt1462764/' target='_blank'>Indiana Jones 5</a><br><span>S01E02</span>",
    //SESAON 01 EPISODE 0
    "<a href='https://super73.com/' target='_blank'>Super 73 Electric Bike<br><span>S01E03</span>",
    "Adults Who Drink Milk<br><span>S01E03</span>",
    "Self Driving Cars<br><span>S01E03</span>",
    "Professional Wrestling<br><span>S01E03</span>"
];

function Lets_Play() {
    down.innerHTML = arr[Math.floor(Math.random() * arr.length)];
}