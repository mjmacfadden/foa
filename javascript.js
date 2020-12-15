var down = document.getElementById('topic');

var arr = [
    //"<a href='' target='_blank'></a><br><span>S02E0</span>",
    //"<br><span>S02E0</span>",
    
    //SEASON 02 EPISODE 12
    //SEASON 02 EPISODE 11
    //SEASON 02 EPISODE 10
    //SEASON 02 EPISODE 09
    //SEASON 02 EPISODE 08
    //SEASON 02 EPISODE 07
    //SEASON 02 EPISODE 06
    //SEASON 02 EPISODE 05
    "<a href='https://www.rottentomatoes.com/' target='_blank'>Rotten Tomatoes</a><br><span>S02E05</span>",
    "<a href='https://www.npr.org/2020/08/03/898496911/99-year-old-pilot-is-going-the-distance-for-2-world-records' target='_blank'>99 Year Old Pilots</a><br><span>S02E05</span>",
    "<a href='https://www.amazon.com/Seen-Sam-6-Samurai-360-Knife/dp/B071NNVKRY' target='_blank'>Samurai 360 Rolling Knives</a><br><span>S02E05</span>",
    //SEASON 02 EPISODE 04    
    "Award Shows<br><span>S02E04</span>",
    "David Blaine<br><span>S02E04</span>",
    "Eradicating All Mosquitoes<br><span>S02E04</span>",
    "<a href='https://get.reface.app/' target='_blank'>The Reface App</a><br><span>S02E0</span>",
    //SEASON 02 EPISODE 03
    "<a href='https://en.wikipedia.org/wiki/Bill_%26_Ted' target='_blank'>Bill and Ted</a><br><span>S02E03</span>",
    "<a href='https://reviverestore.org/projects/woolly-mammoth/' target='_blank'>Reviving the Woolly Mamoth</a><br><span>S02E03</span>",
    "House Cats<br><span>S02E0</span>",
    "<a href='https://fb.watch/2oTB_bgaVW/' target='_blank'>Robot Surgeons</a><br><span>S02E03</span>",
    //SEASON 02 EPISODE 02
    "Lab Grown Meat<br><span>S02E02</span>",
    "Conspiracy Theories<br><span>S02E02</span>",
    "Manscaping<br><span>S02E02</span>",
    "Longboarding In Your 30s<br><span>S02E02</span>",
    //SEASON 02 EPISODE 01
    "<a href='https://athome.starbucks.com/starbucks-fresh-brew-cans/' target='_blank'>Starbucks Fresh Brew Ground Coffee Cans</a><br><span>S02E01</span>",
    "<a href='https://www.oregonlive.com/trending/2020/08/book-a-blockbuster-sleepover-in-bend-today-stay-in-the-worlds-only-surviving-be-kind-please-rewind-video-store.html' target='_blank'>A Sleepover at the Last Blockbuster</a><br><span>S02E01</span>",
    "<a href='https://www.randonautica.com/' target='_blank'>Randonautica</a><br><span>S02E01</span>",
    "<a href='https://www.cheetos.com/products/cheetos-mac-n-cheese-flamin-hot' target='_blank'>Flamin' Hot Cheetos Mac 'n Cheese</a><br><span>S02E01</span>",
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