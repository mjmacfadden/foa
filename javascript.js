var down = document.getElementById('topic');

var arr = [
    //"<a href='' target='_blank'></a><br><span>S03E0</span>",
    //"<br><span>S03E0</span>",
    
    //SEASON 03 EPISODE 05
    "Direct to Streaming Movies<br><span>S03E05</span>",
    "Cursing<br><span>S03E05</span>",
    "Going to the Mall<br><span>S03E05</span>",
    "Christmas Newsletters<br><span>S03E05</span>",

    //SEASON 03 EPISODE 04
    "<a href='https://www.imdb.com/title/tt13612162/' target='_blank'>The Mario Lopez/KFC/Lifetime Collaboration</a><br><span>S03E04</span>",
    "<a href='https://twitter.com/harrietmould/status/1331890921277943808?s=21' target='_blank'>Nonsense Lyrics In Songs</a><br><span>S03E04</span>",
    "<a href='https://www.indiegogo.com/projects/jabii-the-future-exercise-game' target='_blank'>Jabbi</a><br><span>S03E04</span>",
    "Taxidermy<br><span>S03E04</span>",

    //SEASON 03 EPISODE 03
    "Christmas Laser Lights<br><span>S03E03</span>",
    "Inflatable Christmas Decorations<br><span>S03E03</span>",
    "White Elephant/Yankee Swap Gift Exchanges<br><span>S03E03</span>",
    "<a href='https://ebay.us/7sA46g' target='_blank'>Men's Nightgowns</a><br><span>S03E03</span>",
    "<a href='https://www.16personalities.com/' target='_blank'>Personality Tests</a><br><span>S03E03</span>",
    "<a href='https://www.buzzfeed.com/laurengarafano/which-office-character-are-you' target='_blank'>BuzzFeed Quizes</a><br><span>S03E03</span>",
    

    //SEASON 03 EPISODE 02
    "The New Jeopardy Host<br><span>S03E02</span>",
    "DJs Who Stream on Twitch<br><span>S03E02</span>",
    "<a href='https://spiritless.com/products/kentucky-74' target='_blank'>Kentucky 74 Spiritless Bourbon</a><br><span>S03E02</span>",
    "<a href='https://eterneva.com/pets' target='_blank'>Turning Your Pet Into a Diamond</a><br><span>S03E02</span>",


    //SEASON 03 EPISODE 01
    "Holiday Creep<br><span>S03E01</span>",
    "House Shoes<br><span>S03E01</span>",
    "<a href='https://www.23andme.com/' target='_blank'>23andMe</a><br><span>S03E01</span>",
    "<a href='https://www.canyon.com/en-de/e-bikes/future-mobility-concept.html' target='_blank'>The Canyon Future Mobility Project</a><br><span>S03E01</span>",

    //SEASON 02 EPISODE 12
    "Wearing a Halloween Costume to Work<br><span>S02E12</span>",
    "Non-Candy Halloween Treats<br><span>S02E12</span>",
    "<a href='https://youtu.be/s7oPREq3i-I' target='_blank'>David Bowie Biopic without Bowie Music</a><br><span>S02E12</span>",
    "<a href='https://hugsleep.com/products/sleep-pod' target='_blank'>The Hug Sleep Sleep Pod</a><br><span>S02E12</span>",

    //SEASON 02 EPISODE 11
    "<a href='https://higherdose.com/products/infrared-sauna-blanket-v3' target='_blank'>Sauna Blankets</a><br><span>S02E11</span>",
    "<a href='https://www.delish.com/cooking/recipe-ideas/recipes/a55777/pickle-pizza-recipe/' target='_blank'>Pickle Pizza</a><br><span>S02E11</span>",
    "Meditation<br><span>S02E11</span>",
    "Bleu Cheese<br><span>S02E11</span>",

    //SEASON 02 EPISODE 10
    "Believing in Ghosts<br><span>S02E10</span>",
    "Mustaches<br><span>S02E10</span>",
    "Pumpkin Spice Everything<br><span>S02E10</span>",
    "<a href='https://earthsider.com/products/zero-waste-reusable-swab' target='_blank'>Reusable Cotton Swabs</a><br><span>S02E0</span>",

    //SEASON 02 EPISODE 09
    "Film Tropes<br><span>S02E09</span>",
    "Haunted Houses<br><span>S02E09</span>",
    "Halloween Costumes for Pets<br><span>S02E09</span>",
    "<a href='https://mossandfog.com/the-worlds-most-expensive-potato-chips-will-run-you-15-per-chip/' target='_blank'>$15 Potato Chip</a><br><span>S02E09</span>",

    //SEASON 02 EPISODE 08
    "<a href='https://www.google.com/amp/s/www.dailymail.co.uk/news/article-8750675/amp/Bridezilla-slammed-offering-wedding-guests-better-food-depending-cash-gifts.html' target='_blank'>Wedding Menu Proportionate to Gift</a><br><span>S02E08</span>",
    "<a href='https://www.vanityfair.com/style/2020/09/louis-vuitton-luxury-covid-face-shield' target='_blank'>Couture Face Masks</a><br><span>S02E08</span>",
    "<a href='https://www.getproper.com/' target='_blank'>Sleep Coaches</a><br><span>S02E08</span>",
    "Buying a Used Mattress<br><span>S02E08</span>",

    //SEASON 02 EPISODE 07
    "<a href='https://www.amazon.com/dp/B00UWWC4QY/ref=cm_sw_r_cp_api_fab_bvwAFb7HRJNDW' target='_blank'>Ironic Product Reviews</a><br><span>S02E07</span>",
    "<a href='https://news.dunkindonuts.com/news/harpoon-dunkin-new-coffee-donut-beers' target='_blank'>Dunkin\' Donuts Flavored Beer</a><br><span>S02E07</span>",
    "<a href='https://www.cnn.com/travel/amp/flights-to-nowhere-qantas/index.html' target='_blank'>A Flight to Nowhere</a><br><span>S02E07</span>",
    "<a href='https://chipotlegoods.com/' target='_blank'>Chipotle Branded Clothing</a><br><span>S02E07</span>",

    //SEASON 02 EPISODE 06
    "Saunas<br><span>S02E06</span>",
    "Chicago Style Pizza<br><span>S02E06</span>",
    "<a href='https://youtu.be/c9TACAdTiCc' target='_blank'>Class Action Park</a><br><span>S02E06</span>",
    "<a href='https://www.forbes.com/sites/katedingwall/2020/08/27/busch-has-launched-a-beer-for-dogs/' target='_blank'>Busch Dog Brew</a><br><span>S02E06</span>",


    //SEASON 02 EPISODE 05
    "<a href='https://www.rottentomatoes.com/' target='_blank'>Rotten Tomatoes</a><br><span>S02E05</span>",
    "<a href='https://www.npr.org/2020/08/03/898496911/99-year-old-pilot-is-going-the-distance-for-2-world-records' target='_blank'>99 Year Old Pilots</a><br><span>S02E05</span>",
    "<a href='https://www.amazon.com/Seen-Sam-6-Samurai-360-Knife/dp/B071NNVKRY' target='_blank'>Samurai 360 Rolling Knives</a><br><span>S02E05</span>",
    
    //SEASON 02 EPISODE 04    
    "Award Shows<br><span>S02E04</span>",
    "David Blaine<br><span>S02E04</span>",
    "Eradicating All Mosquitoes<br><span>S02E04</span>",
    "<a href='https://get.reface.app/' target='_blank'>The Reface App</a><br><span>S02E04</span>",
   
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
    "Compulsory Voting<br><span>S01E09</span>",
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

var x = 0;
var For = document.getElementById("for");
var Against = document.getElementById("against");

function Lets_Play() {
    down.innerHTML = arr[Math.floor(Math.random() * arr.length)];
    document.getElementById("percent").innerHTML = " ";
    var Play = document.getElementById("play_button");
    Play.innerHTML = "NEXT";
    For.classList.add("foa_button_show");
    Against.classList.add("foa_button_show");
    x = 1;
    For.classList.remove("pressed");
    Against.classList.remove("pressed");
}

function foa_for(){
    if (x == 1){
        For.classList.add("pressed");
        x = 0;
    }
}

function foa_against(){
    if (x == 1){
        Against.classList.add("pressed");
        x = 0;
    }
}


function foa_Play() {
    if (x == 1){
        var percentage = Math.floor(Math.random() * 78) + 22;;
        var This = percentage + "%";
        document.getElementById("percent").innerHTML = This;
    }
}
