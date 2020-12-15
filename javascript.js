var down = document.getElementById('topic');

var arr = [
    //"<a href='' target='_blank'></a><br><span>S01E0</span>",
    //"<br><span>S01E0</span>",
    
    //SEASON 01 EPISODE 10
    "Hard Seltzers<br><span>S01E10</span>",
    "Smart Homes<br><span>S01E10</span>",
    "<a href='https://youtu.be/DSHsIOIhjJY' target='_blank'>Minimalist Wardrobes</a><br><span>S01E10</span>",
    "<a href='https://www.sportscasting.com/can-nba-players-actually-see-and-hear-the-virtual-fans/' target='_blank'>Virtual Fans</a><br><span>S01E10</span>",
    //SEASON 01 EPISODE 09
    "Compulsor Voting<br><span>S01E09</span>",
    "<a href='https://www.instagram.com/explore/tags/vanlife/' target='_blank'>#Vanlife</a><br><span>S01E09</span>",
    "Adults Who Play with Legos<br><span>S01E09</span>",
    "Living Forever<br><span>S01E09</span>",
    //SEASON 01 EPISODE 08
    "Trading Cards<br><span>S01E08</span>",
    "E-Sports<br><span>S01E08</span>",
    "Minivans<br><span>S01E08</span>",
    "<a href='https://www.ford.com/suvs/bronco/2021/' target='_blank'>New Ford Bronco</a><br><span>S01E08</span>",
    //SEASON 01 EPISODE 07
    "<a href='https://ecochallenge.com/' target='_blank'>Adventure Racing</a><br><span>S01E07</span>",
    "Handshakes<br><span>S01E07</span>",
    "Sharing Streaming Services<br><span>S01E07</span>",

    //SEASON 01 EPISODE 06
    "CBD Infused Products<br><span>S01E06</span>",
    "<a href='https://nypost.com/2020/01/14/sexy-robot-influencers-are-taking-over-instagram-and-coming-for-your-jobs/' target='_blank'>CGI Influencers</a><br><span>S01E06</span>",
    "<a href='https://www.businessinsider.com/rage-rooms-people-break-things-bar-review-2020-3#in-addition-to-jilted-lovers-break-bar-brings-in-a-steady-stream-of-young-professionals-and-regularly-hosts-corporate-events-celebrity-meet-and-greets-and-office-happy-hours-3' target='_blank'></a>Rage Rooms<br><span>S01E06</span>",
    //SEASON 01 EPISODE 05
    "Dungeons and Dragons<br><span>S01E05</span>",
    "<a href='https://en.wikipedia.org/wiki/ASMR' target='_blank'>ASMR</a><br><span>S01E05</span>",
    "<a href='https://www.peacocktv.com/saved-by-the-bell' target='_blank'>Saved by the Bell Reboot</a><br><span>S01E05</span>",
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