var down = document.getElementById('topic');

var arr = [
    //"<a href='' target='_blank'></a><br><span>S01E0</span>",
    //"<br><span>S01E0</span>",

    //SEASON 01 EPISODE 04
    "<a href='https://twitter.com/kinsellawarren/status/1262956417817944064?s=20' target='_blank'>Uncle Bunky Obituary</a><br><span>S01E04</span>",
    "<a href='https://www.motorola.com/we/smartphones-razr-5g' target='_blank'>Foldable Smartphones</a><br><span>S01E04</span>",
    "Becoming an Astronaut<br><span>S01E04</span>",
    "<a href='https://www.theragun.com/us/en-us/pro-us.html' target='_blank'>Theragun PRO</a><br><span>S01E04</span>",
    //SESAON 01 EPISODE 03
    "<a href='https://super73.com/' target='_blank'>Super 73 Electric Bike</a><br><span>S01E03</span>",
    "Adults Who Drink Milk<br><span>S01E03</span>",
    "Self Driving Cars<br><span>S01E03</span>",
    "Professional Wrestling<br><span>S01E03</span>",    
    //SESAON 01 EPISODE 02
    "Bidets<br><span>S01E02</span>",
    "<a href='https://twitter.com/sageboggs/status/1242968530250870786?s=20' target='_blank'>Electricity Biscuits</a><br><span>S01E02</span>",
    "TikTok<br><span>S01E02</span>",
    "<a href='https://www.imdb.com/title/tt1462764/' target='_blank'>Indiana Jones 5</a><br><span>S01E02</span>",    
    //SEASON 01 EPISODE 01
    "<a href='https://www.elliptigo.com/products/elliptigo-3c/' target='_blank'>The Eliptigo C3</a><br><span>S01E01</span>",
    "Quarantine Haircuts<br><span>S01E01</span>",
    "Sourdough Breadmaking<br><span>S01E01</span>"
];

function Lets_Play() {
    down.innerHTML = arr[Math.floor(Math.random() * arr.length)];
}