// ───────────────────────────────────────────────────────────
//  Travel content — Kelly's destination guides, itineraries,
//  and wishlist. Edit this file to update the travel page.
//
//  Guide schema:
//    { slug, name, country, category, visited?, gradient,
//      photoCard?, photoHero?,  // optional image paths (img/travel/*.jpg)
//      intro, sections: [{ title, items: [{ name, note?, url? }] }] }
//
//  Itinerary schema:
//    { slug, name, location, duration, gradient, intro,
//      days: [{ label, items: [string] }] }
//
//  Wishlist:
//    [{ name, location }]
// ───────────────────────────────────────────────────────────

window.TRAVEL_DATA = {

  guides: [

    // ────────── SKIING ──────────

    {
      slug: "zermatt",
      name: "Zermatt",
      country: "Switzerland",
      category: "ski",
      gradient: 2,
      photoCard: "img/travel/zermatt-2.jpg",
      photoHero: "img/travel/zermatt-1.jpg",
      intro: "Zermatt is basically 3 mountains — the main gondola is the Matterhorn glacier paradise, then sunegga/blauherd (lots of restaurants), then gornergrat (which has a castle at the top). Getting between mountains is a little complicated, so we just chose one mountain each day and skied everything on it.",
      sections: [
        {
          title: "Skiing",
          items: [
            { name: "Italian side (via Matterhorn glacier paradise)", note: "The tram to Italy isn't always open but if it is and the weather is good, you should definitely ski in Italy one day (plan to go for the whole day). The skiing in Italy was AMAZING, my favorite. The very top of the Italian side is a bit steep but I was able to do it as an intermediate skier — if you're less experienced you can take the gondola down one stop. The rest is nice wide runs." },
            { name: "Sunegga / Blauherd", note: "Easier skiing but so fun. This is where Chez Vrony and Älder Hitta are." },
            { name: "Gornergrat", note: "We didn't ski this much because we ran out of time but it looks cool — there's a castle at the top." },
            { name: "Italy lift ticket", note: "You need a specific ticket to ski in Italy. Get it at the bottom of the gondola. We did a 4-day pass that just included Italy but you can also get one day." }
          ]
        },
        {
          title: "On-Mountain Food — Swiss Side",
          items: [
            { name: "Chez Vrony", note: "So good and amazing views of the Matterhorn. We got the burger and it was delicious. Reservation required — book on their website." },
            { name: "Älder Hitta", note: "Get a reservation for the patio if the weather looks good — you'll have a clear view of the Matterhorn. The rösti was amazing." }
          ]
        },
        {
          title: "On-Mountain Food — Italian Side",
          items: [
            { name: "Chalet Etoile", note: "Amazing pasta and beautiful views. So cheap compared to Switzerland!" }
          ]
        },
        {
          title: "In Town",
          items: [
            { name: "Le Gitan", note: "Upscale Swiss food. Really good meat and unlimited potatoes au gratin." },
            { name: "Da Nico", note: "Italian. Really good pizza and salad." },
            { name: "Swiss Chalet", note: "Amazing fondue, so quaint inside." }
          ]
        },
        {
          title: "Après & Bars",
          items: [
            { name: "Hennu Stall", note: "This is a must!! On the Matterhorn glacier side — get off the first stop of the gondola and ski to it. Saturday was the most packed but we went every day. Most people got there between 3–4. You have to ski down after but it's easy and like 5 mins." },
            { name: "Harry's Ski Bar", note: "Apres bar in town with inside and outside. Super fun." },
            { name: "Hexenbar", note: "In town. Kinda a dive bar but great music — the bartender was lit and kept giving us free shots lol." },
            { name: "Piano Bar at the Zermatterhof", note: "In town, more upscale but so fun. Request 'Hit Me Baby One More Time' from the piano guy lol." },
            { name: "Papperla", note: "Also in town. Looked lit — we didn't go but apparently it's so fun." },
            { name: "Champagne Bar", note: "On the mountain, sunegga side. Looks amazing — we didn't make it but like soo cute and Instagram worthy 😂" }
          ]
        },
        {
          title: "Hotel & Logistics",
          items: [
            { name: "Hotel Sonne", note: "We loved it. Breakfast included (quite good), pool, sauna, steam room, indoor/outdoor hot tubs. Up a bit of a hill but they had a shuttle to/from the train station and a free shuttle to the gondolas each morning." },
            { name: "Hotel Rex", note: "Our friend stayed here and really enjoyed it — right in town (more central than Sonne)." },
            { name: "Slalom Sport (rental)", note: "Right in town, very friendly. Gave us an extra day because our flight landed late and let us swap skis to try different ones at no cost." },
            { name: "Train from Zurich Airport", note: "Book the Savers Day Pass (full fare) in advance — it's about 50% off if you book early. The ticket is good for the entire day and all trains in Switzerland.", url: "https://www.sbb.ch/en/buying/pages/kontingent/kontingent.xhtml" },
            { name: "Getting around Zermatt", note: "Electric vehicle only city — cute little electric cabs and busses. City is small enough to walk everywhere. The city bus is free and runs between the gondolas. We called our hotel for a shuttle from the train station. Electric cabs were 12–13 francs each time." }
          ]
        }
      ]
    },

    {
      slug: "chamonix",
      name: "Chamonix",
      country: "France",
      category: "ski",
      gradient: 2,
      photoCard: "img/travel/chamonix-2.jpg",
      photoHero: "img/travel/chamonix-1.jpg",
      intro: "Chamonix might be my favorite ski town I've ever been to. So cute and walkable. It's just over an hour from Geneva airport. The skiing is 3–4 different mountains and you have to drive/shuttle between them — we basically did 1 mountain per day. Chamonix is on the Ikon pass; if you don't have one and plan to do any activities, the Mont Blanc Unlimited pass probably makes most sense.",
      sections: [
        {
          title: "Skiing",
          items: [
            { name: "Les Houches", note: "Lowest altitude so more moderate temps but also less snow. When we were there it was pretty slushy/icy by the last day, but with good snow it'd be super fun. Good for beginners. Views are amazing." },
            { name: "Grand Montets", note: "My favorite mountain. We got fresh powder and it was so fun. Lots of off-piste, steeper runs." },
            { name: "Brévent / Flégère", note: "Quite fun, pretty crowded when we were there but a lot of fun runs and a good mix of difficulty. The views from the top of the cable car were crazy." }
          ]
        },
        {
          title: "Restaurants",
          items: [
            { name: "Josephine's", note: "Modern French cuisine, fun vibes. French onion soup is amazing." },
            { name: "Rose du Pont", note: "Owned by same owner as Josephine's — similar but different menu. Also very good." },
            { name: "Dainty Pizza", note: "Takeout pizza place. Delicious and cheap." }
          ]
        },
        {
          title: "Activities",
          items: [
            { name: "Mer de Glace", note: "Ice caves carved from one of the glaciers. You take an old red train 20 mins up the mountain then a 5–10 min gondola to the caves. Walkable, set up like a mini museum. Train + gondola around €40 pp." },
            { name: "Aiguille du Midi", note: "Viewpoint at 4,000+ meters with a great view of Mont Blanc and the city below. CRAZY views!! You take 2 cable cars up. Doesn't run in high winds. Reserve a cable car time at the ticket office before you go up. Free with Mont Blanc Unlimited, about €80 otherwise." },
            { name: "Ski La Vallée Blanche", note: "All-day ski trek from the top of Aiguille du Midi. Highly recommend hiring a guide (around €700 for the day, split among the group). Tom & Corey said it was amazing. Pretty technical (lots of crevasses) with some hiking — best for advanced skiers. They used Chamonix Experience." },
            { name: "Mont Blanc Unlimited Pass", note: "Includes the Mer de Glace train/gondola and Aiguille du Midi cable car — no extra fee." }
          ]
        },
        {
          title: "Après & Bars",
          items: [
            { name: "Bar'd Up", note: "Super fun dive bar with cool decor and a DJ." },
            { name: "Bar'd Up's street", note: "The whole street has a ton of bars and some restaurants — recommend checking it out." },
            { name: "La Folie Douce Hotel", note: "Same brand as Folie Douce in Méribel but different since it's a hotel in town. More upscale, nice for a cocktail." }
          ]
        },
        {
          title: "Shopping",
          items: [
            { name: "Black Crows", note: "From Chamonix — there's a store right in town." },
            { name: "Boardriders" }
          ]
        }
      ]
    },

    {
      slug: "trois-vallees",
      name: "Trois Vallées",
      country: "France",
      category: "ski",
      gradient: 2,
      photoCard: "img/travel/trois-vallees-1.jpg",
      photoHero: "img/travel/trois-vallees-2.jpg",
      intro: "Les Trois Vallées is the biggest ski resort in the world — three main areas: Courchevel, Méribel, and Val Thorens. About 2 hours from Geneva. You can ski between all three but it takes time. When we were there, Courchevel had the best skiing by far.",
      sections: [
        {
          title: "Where to Stay",
          items: [
            { name: "Les Allues (Méribel area)", note: "We stayed at an Airbnb here — 5 min walk to the free shuttle that takes you to Méribel lifts. Méribel is in the middle of Val Thorens and Courchevel and is cheaper than Courchevel. If I went back I'd stay in Méribel again but try to find a place closer to town." }
          ]
        },
        {
          title: "Skiing",
          items: [
            { name: "One resort per day", note: "We basically skied one resort per day. Skiing from Méribel to Val Thorens takes good skiers 1–2 hours of straight lifts + skiing — not recommended for beginners. The ski back from Val Thorens to Méribel is much shorter, ~30 mins." },
            { name: "Driving Méribel ↔ Val Thorens", note: "1 hour, costs €200 in a taxi. Uber probably cheaper. Don't really recommend this either." },
            { name: "Val Thorens", note: "Highest altitude — more snow but colder. The main lifts/runs were quite crowded when we were there. Didn't have time to venture further but I imagine you can find great spots beyond the main lifts." },
            { name: "Méribel → Courchevel", note: "My favorite ski of the trip. Got first gondola/chair up and skied over. Beautiful wide groomers, so fun." },
            { name: "Courchevel", note: "Known as one of the bougiest ski resorts — there's an airport on the mountain and a Moncler shop on the slopes. You'll see some crazy outfits. Food is expensive but views and atmosphere are fun, and the skiing is really good." }
          ]
        },
        {
          title: "On-Mountain Food",
          items: [
            { name: "Chalet de Pierres (Courchevel)", note: "Right on the slopes with outdoor seating, beautiful views. We stopped here for coffee and croissants twice. Pricey (€20 for coffee + croissant) but the croissants were actually so good and the views are beautiful. Moncler store is on the bottom level." },
            { name: "Les Soucoupes", note: "The fanciest meal we did on the mountain. You need a reservation but still ski up — no need to dress up. Food was amazing; they cook the meat on an open fire in the middle of the restaurant. Lunch seating is only inside (snacks and drinks on the patio). A bit expensive but very good." }
          ]
        },
        {
          title: "In Town",
          items: [
            { name: "Fromagerie", note: "Traditional place for fondue or raclette. Delicious but very heavy — plan accordingly." },
            { name: "L'Arbé (Les Allues)", note: "Cheap & delicious. Pizza and pasta were both very good. Wouldn't go out of your way, but we could walk here from our Airbnb so it was well worth it." }
          ]
        },
        {
          title: "Après",
          items: [
            { name: "La Folie Douce", note: "By far the most popular apres spot — blew up on social media. Original in Val Thorens, also one in Méribel. We went to both and preferred Méribel — lower altitude, bigger, more production. Apres starts around 2pm with a show, then DJ until close. People stand on tables and spray champagne. Wild." },
            { name: "La Rond Point (Ronny's) — Méribel", note: "On the slopes, more casual and cheaper than Folie Douce. Stays open later — we'd go here when Folie Douce closed. Live music both times we went." },
            { name: "La Taverne", note: "Dive bar in town, fun for later in the evening. Cheap drinks and throwback music." }
          ]
        }
      ]
    },

    {
      slug: "aspen",
      name: "Aspen",
      country: "Colorado, USA",
      category: "ski",
      gradient: 5,
      photoCard: "img/travel/aspen-1.jpg",
      photoHero: "img/travel/aspen-2.jpg",
      intro: "Aspen has four mountains, all accessible by free busses: Ajax (downtown, not for beginners), Aspen Highlands, Snowmass (biggest, best for beginners), and Buttermilk. Below is a 3-day weekend itinerary plus our restaurant + bar list.",
      sections: [
        {
          title: "3-Day Weekend Itinerary",
          items: [
            { name: "Day 1 — Ajax", note: "Coffee & pastries at Paradise Bakery. Ski Ajax Mountain (walkable from most places downtown). Apres at Ajax Tavern — get the truffle fries!! Dinner at Matsuhisa Aspen." },
            { name: "Day 2 — Highlands", note: "Coffee and breakfast at Unravel. Take the free bus to Aspen Highlands. Ski (if you're advanced, hit the Highland Bowl). Apres at Cloud 9 on the mountain. Drinks at J Bar. Casual dinner at White House Tavern." },
            { name: "Day 3 — Snowmass", note: "Paradise Bakery for coffee & breakfast. Take the shuttle to Aspen Snowmass. Ski. Apres at Venga Venga in Snowmass — get margs & guac! Shopping at Kemo Sabe. Dinner at Parc." }
          ]
        },
        {
          title: "Restaurants",
          items: [
            { name: "Paradise Bakery" },
            { name: "Unravel", note: "Coffee" },
            { name: "Matsuhisa Aspen", note: "By Nobu" },
            { name: "Parc Aspen" },
            { name: "White House Tavern" }
          ]
        },
        {
          title: "Bars & Après",
          items: [
            { name: "J Bar", note: "In the Hotel Jerome" },
            { name: "Cloud 9", note: "On the mountain (Highlands)" },
            { name: "Ajax Tavern" },
            { name: "Venga Venga", note: "In Snowmass" }
          ]
        }
      ]
    },

    // ────────── NATIONAL PARKS & OUTDOORS ──────────

    {
      slug: "big-bend",
      name: "Big Bend National Park",
      country: "Texas, USA",
      category: "outdoors",
      visited: ["2018-12"],
      gradient: 1,
      photoCard: "img/travel/big-bend-2.jpg",
      photoHero: "img/travel/big-bend-1.jpg",
      intro: "We highly recommend Big Bend to everyone. It's a huge park (bigger than Rhode Island) so you need to plan your days and check distances between hikes. You'll end up doing a lot of driving — and the driving is beautiful too. We've been in December and in April. December was very cold at night but a very nice temperature hiking; April was hot but not terrible. I'd be skeptical to go between April and September. No matter when, bring tons of water & food on every hike.",
      sections: [
        {
          title: "Why Go",
          items: [
            { name: "Darkest skies in the continental US", note: "Great place for stargazing." },
            { name: "Bigger than Rhode Island", note: "#everythingsbiggerintexas" },
            { name: "Natural hot spring on the Rio Grande", note: "Hop between the hot spring and the cold river." },
            { name: "One of the least-visited parks in the US", note: "Because of how remote it is." },
            { name: "More bird species than any other US national park", note: "450+." },
            { name: "Terlingua ghost town right outside", note: "A real mining town until it went bust." },
            { name: "Burro ride into Boquillas, Mexico", note: "Cross the Rio Grande for lunch and unique souvenirs." }
          ]
        },
        {
          title: "Hikes — Chisos Basin",
          items: [
            { name: "South Rim & Emory Peak", note: "Our favorite hike. Definitely an all-day commitment — 12.6 miles, beautiful terrain, major elevation gain. You can add Emory Peak (the highest peak in the park) for ~1 more hour, but the trail to the peak is pretty difficult. We did it once but wouldn't necessarily recommend unless you're looking for a challenge." },
            { name: "Lost Mines Trail", note: "One of our favorite easy hikes. 4 miles, ~2 hours. Limited parking at the trailhead so do it first thing. We've done it twice at sunrise and it's awesome — 1 hour to the top. We also saw deer on this trail!" },
            { name: "Window Trail", note: "5 mile hike that ends with a really cool 'window' view. Highly recommend — do it in 2–3 hours." }
          ]
        },
        {
          title: "Hikes — Eastern Big Bend",
          items: [
            { name: "Santa Elena Canyon", note: "Short and easy, 1.5 miles out-and-back. Highly recommend — you've probably seen this canyon in Big Bend photos." },
            { name: "Mule Ears", note: "6-mile desert trail, no shade. Wouldn't necessarily recommend, but you can see the 'mule ears' rock formation from the trailhead." },
            { name: "Cattail Falls", note: "Unmarked trail (Google it). 6 miles round trip to a waterfall. Fairly flat. Across from Sam Nail Ranch — Google exactly where to park." }
          ]
        },
        {
          title: "Hikes — Rio Grande Village",
          items: [
            { name: "Boquillas Canyon Trail", note: "Highly recommend. ~1 mile round trip with cool terrain. Fairly flat, along the water, some shade." },
            { name: "Hot Springs", note: "A must-do! Natural hot spring adjacent to the Rio Grande — bring your bathing suit. The spring is really hot and the river is really cold; it's fun to jump back and forth. Half-mile walk from parking. Go early if you want to be alone, or in the evening to relax." },
            { name: "Rio Grande Village Trail", note: "Easy ~1 mile with nice views of the Rio Grande from the top. Wouldn't go out of my way, but worth squeezing in if you're in the area." }
          ]
        },
        {
          title: "Other",
          items: [
            { name: "Ernst Tinaja", note: "Big asterisk: this is an unmarked off-road 4WD trail — but we did it in my Corolla and it was fine. Venture at your own risk! Super cool watering hole in the middle of the desert. Mainly driving with a short ~0.5 mile hike to get there." }
          ]
        },
        {
          title: "Terlingua (ghost town outside the park)",
          items: [
            { name: "Starlight Theater", note: "By far the most popular restaurant in Terlingua. American/Mexican mix with live music. Make a reservation — long waits in busy season." },
            { name: "Coffee shop next to Starlight", note: "Not sure the name but there's a coffee shop next to the theater (right side if facing it) with good coffee and great breakfast burritos." },
            { name: "Terlingua Cemetery", note: "Walk through — very cool and a little eerie at sunset." }
          ]
        },
        {
          title: "Where to Stay",
          items: [
            { name: "Chisos Basin Mountain Lodge (in the park)", note: "We stayed here one night in December after a long hike (South Rim) so we didn't have to drive. Basic but fine. There's a restaurant. Books up very quickly — plan ahead.", url: "https://www.chisosmountainslodge.com/" },
            { name: "Nuevo Terlingua", note: "By far the nicest (and most expensive) place we stayed. Outdoor bathtub and great views from the porch.", url: "https://www.nuevoterlingua.com/casa-nuevo" },
            { name: "Tin Valley Retro Rentals", note: "~20 mins north of Terlingua (so ~30–40 from Big Bend) — so awesome. Renovated rentals, always adding more." },
            { name: "Tipi (Airbnb)", note: "Surprisingly spacious tipi with 2 full beds. Amazing views. Stayed in April — comfortable. A few bugs, but you're in the desert.", url: "https://abnb.me/d2AcfKXGL7" },
            { name: "Cactus Camper (Airbnb)", note: "Stayed one night in December. Cold but fun. Bring propane for the heaters and stuff for fires!", url: "https://abnb.me/1M1rNMyHL7" },
            { name: "Spinning Bug (Airbnb)", note: "So fun to stay in but less space than the camper. Comfortable in April.", url: "https://abnb.me/7uqlmwQHL7" }
          ]
        }
      ]
    },

    {
      slug: "great-smoky-mountains",
      name: "Great Smoky Mountains National Park",
      country: "North Carolina / Tennessee, USA",
      category: "outdoors",
      gradient: 4,
      intro: "The only national park in North Carolina. The hiking is amazing and we saw cool wildlife (elks!) the first time. We went in April and in September — moderate weather both times. We've stayed on both the Tennessee and North Carolina sides and we prefer the NC side. We camped in Bryson City, NC, but there are also Airbnbs in that area.",
      sections: [
        {
          title: "Hikes",
          items: [
            { name: "Alum Cave Trail to Mount LeConte", note: "Our favorite — but a big commitment. 4–5 hours, ~11 miles round trip. Beautiful views at the top and about halfway up (~2.5 miles in, where Alum Cave is). There's a little gift shop at the top and cabins that people stay in — pretty cool!", url: "https://www.alltrails.com/trail/us/tennessee/alum-cave-trail-to-mount-leconte" },
            { name: "Chimney Top Trail", note: "~4 miles total, out-and-back. The final part has been blocked off since the 2016 wildfires, but you still get a cool view of the chimney top.", url: "https://www.alltrails.com/trail/us/tennessee/chimney-tops-trail" },
            { name: "Clingman's Dome", note: "Super quick ~1 mile round trip. Tallest peak in the park. A bit touristy so I wouldn't go out of the way — but it could have cool views (when we went it was rainy/overcast).", url: "https://www.alltrails.com/trail/us/north-carolina/clingmans-dome-observation-tower-trail" },
            { name: "Mingo Falls", note: "Tallest waterfall in the Smokies. Technically just outside the park. ~1 mile round trip.", url: "https://www.nps.gov/grsm/planyourvisit/mingo-falls.htm" }
          ]
        },
        {
          title: "Things to Do",
          items: [
            { name: "Elk Watching", note: "If you drive into the park from Bryson City (the NC side), once you're in there's a big green grassy field with signs about elks. The elks are normally there in the morning and before sunset." }
          ]
        },
        {
          title: "Towns",
          items: [
            { name: "Bryson City, NC", note: "The NC side of the Smokies. Cute little town with restaurants and bars — you can take the Great Smoky Mountain Railroad from here.", url: "https://www.gsmr.com/" },
            { name: "Gatlinburg, TN", note: "This is a weird town. Reminds me of a run-down, wannabe, country-western Vegas — but replace the pool parties with pancake houses (dead serious). Amusement park, 20 mins from Dollywood. Can't recommend spending a lot of time here but it's worth driving through to see it in person.", url: "https://obergatlinburg.com/" }
          ]
        }
      ]
    },

    // ────────── U.S. CITIES & TOWNS ──────────

    {
      slug: "asheville",
      name: "Asheville",
      country: "North Carolina, USA",
      category: "cities",
      gradient: 4,
      intro: "We love Asheville. It's a cute little town surrounded by beautiful mountains. Most people who live here are either retired, hippies, or retired hippies. Ton of breweries and good food. When we go, we normally split our time between hiking/exploring and breweries/restaurants — somehow we always end up spending more time eating and drinking, but it's well worth it.",
      sections: [
        {
          title: "Breakfast & Brunch",
          items: [
            { name: "Sunny Point Cafe", note: "In West Asheville. There will be a wait but you can get a drink and sit on their patio while you wait. Get the Huevos Rancheros." },
            { name: "Vortex Doughnuts", note: "Amazing donuts! Apparently the best in Asheville.", url: "http://vortexdoughnuts.com/" }
          ]
        },
        {
          title: "Dinner",
          items: [
            { name: "Rhubarb", note: "On the nicer/expensive side but amazing farm-to-table. Need a reservation.", url: "https://rhubarbasheville.com/" },
            { name: "Holeman + Finch Asheville", note: "We went for dinner on their grand re-opening weekend — amazing. One of the best charcuterie boards I've ever had. Duck pâté is amazing.", url: "https://holeman-finch-avl.com/" },
            { name: "Chestnut", note: "Disclaimer: we've never been. I've heard amazing things but have never been able to get a reservation. If you get one, let me know how it is.", url: "https://www.chestnutasheville.com/" },
            { name: "Ben's Tune Up", note: "A renovated car shop turned Japanese sake bar. We always end up here every time we're in Asheville. Good food (Japanese fusion) and sake flights. Fun vibes, sometimes live music.", url: "http://www.benstuneup.com/" },
            { name: "Mellow Mushroom Pizza", note: "Amazing pizza and cute retro vibes. I learned after that it's a chain but I still thought it was cute and delicious.", url: "https://mellowmushroom.com/location/nc-asheville-50-broadway-st-28801/" },
            { name: "Itto Ramen & Japanese Tapas" }
          ]
        },
        {
          title: "Breweries",
          items: [
            { name: "Hi-Wire Brewing", note: "Our favorite brewery in Asheville. They have 3 locations — our favorite is South Slope." },
            { name: "Burial Beer", note: "We love Burial beers.", url: "https://burialbeer.com/" },
            { name: "Green Man Brewery", note: "Their beers are just okay but they have TVs — we went to watch sports.", url: "https://www.greenmanbrewery.com/" },
            { name: "DSSOLVR" }
          ]
        },
        {
          title: "Do",
          items: [
            { name: "Salt Caves", note: "A fun thing to do. Sit in a salt cave and relax/meditate.", url: "https://www.exploreasheville.com/listings/asheville-salt-cave/13305/" },
            { name: "The Biltmore", note: "Disclaimer: never been. On my bucket list. A chateau owned by the Vanderbilts — the largest privately owned residence in the US. NC's Versailles. Book ahead — tour includes a free wine tasting (limited availability).", url: "https://www.biltmore.com/visit/tickets-pricing/" },
            { name: "Omni Grove Park Inn", note: "Disclaimer: never been. A BOUGIE hotel near Asheville that people swear by. Amazing views and a great spa. Try to book a drink at their Sunset Terrace — definitely need a reservation.", url: "https://www.omnihotels.com/hotels/asheville-grove-park/" },
            { name: "Blue Ridge Mountains" },
            { name: "Asheville Outlet Mall", note: "I know an outlet mall is a weird flex but this is a good one — Restoration Hardware, West Elm, really good deals.", url: "https://www.shopashevilleoutlets.com/directory/" }
          ]
        }
      ]
    },

    {
      slug: "scottsdale",
      name: "Scottsdale",
      country: "Arizona, USA",
      category: "cities",
      gradient: 3,
      photoCard: "img/travel/scottsdale-2.jpg",
      photoHero: "img/travel/scottsdale-2.jpg",
      intro: "Phoenix-area locals guide — fancy dinners, casual spots, brunch, pool day resorts, hikes, and where to go out.",
      sections: [
        {
          title: "Fancy Dinners",
          items: [
            { name: "Maple and Ash", note: "American" },
            { name: "Mission", note: "Latin/Mexican" },
            { name: "Canal Club", note: "Cuban" },
            { name: "Buck and Rider", note: "Seafood" },
            { name: "Tommy Bahama" },
            { name: "Sumo Maya", note: "Mexican / Asian fusion" },
            { name: "Postino's", note: "Wine bar" },
            { name: "RA Sushi" }
          ]
        },
        {
          title: "Casual Dinner",
          items: [
            { name: "Cold Beer and Cheeseburger" },
            { name: "Dillaria", note: "Upscale quesadillas" },
            { name: "Culinary Dropout" },
            { name: "Jalapeño Inferno" },
            { name: "Zipps", note: "Wings and beer" },
            { name: "Los Olivos", note: "Authentic Mexican" },
            { name: "Julio's Too", note: "Authentic Mexican" },
            { name: "Diego Pops", note: "Tacos" },
            { name: "Oregano's", note: "Italian" },
            { name: "Grimaldi's", note: "Pizza" }
          ]
        },
        {
          title: "Brunch",
          items: [
            { name: "Montauk", note: "My favorite place" },
            { name: "RnR", note: "Fun, half inside and outside" },
            { name: "El Chorro", note: "My other favorite. Beautiful scenery, amazing food." },
            { name: "Chop Shop", note: "Casual, really good" },
            { name: "D Lite", note: "Fast drive-through" },
            { name: "Breakfast Club" },
            { name: "Morning Squeeze" },
            { name: "Farm & Craft" }
          ]
        },
        {
          title: "Pool Day Resorts",
          items: [
            { name: "Valley Ho" },
            { name: "The Phoenician" },
            { name: "Camelback" },
            { name: "The W" },
            { name: "The Scott" }
          ]
        },
        {
          title: "Things To Do",
          items: [
            { name: "Rusty Spur", note: "Dive bar, live music, cowboy bar" },
            { name: "Buffalo Chip", note: "Cave Creek — bull riding, cowboy bar" },
            { name: "Tempe Town Lake", note: "Walk around, rent paddle boards / canoes, on Arizona State's campus" },
            { name: "Chapparel Park", note: "Sand volleyball, small lake, walking" }
          ]
        },
        {
          title: "Hiking",
          items: [
            { name: "Camelback Mountain", note: "Echo Canyon is the trail" },
            { name: "Piestewa Peak", note: "Squaw Peak is the trail" },
            { name: "Black Mountain", note: "Hard" },
            { name: "Pinnacle Peak" },
            { name: "A Mountain", note: "On Arizona State campus — looks into the stadium and over the whole Sun Valley of Phoenix. Super easy, not even a 15-min hike." }
          ]
        },
        {
          title: "Going Out",
          items: [
            { name: "Riot House", note: "Club" },
            { name: "Casa Amigos", note: "Club" },
            { name: "Bottled Blonde", note: "Club" },
            { name: "Hi Fi", note: "Club" },
            { name: "Maya / District", note: "Club — BEST day drink" },
            { name: "Clancy's", note: "Irish pub" },
            { name: "Boondocks", note: "Fun bar outside, highly rec" },
            { name: "Bevvy", note: "Happy hour & fun" },
            { name: "Low Key", note: "Tempe — and piano bar!!!" },
            { name: "Coach House", note: "Half inside half outside" }
          ]
        }
      ]
    },

    {
      slug: "tampa",
      name: "Tampa",
      country: "Florida, USA",
      category: "cities",
      gradient: 3,
      photoCard: "img/travel/tampa-1.jpg",
      photoHero: "img/travel/tampa-2.jpg",
      intro: "Things to do, eat, and drink in Tampa — including a Tiki tour for boat people and the bougie dessert room at Bern's.",
      sections: [
        {
          title: "Activities",
          items: [
            { name: "Tiki Tour", note: "Like a pedal tavern but on water. BYOB — feels like it'd be perf for a bach. We saw dolphins!", url: "https://www.totallytikitours.com/" },
            { name: "Boardwalk", note: "Right downtown — we walked from Sparkman Wharf to Armature Works." },
            { name: "Historic Ybor", note: "The area we went out on New Year's. Tons of bars and clubs." }
          ]
        },
        {
          title: "Coffee & Lunch",
          items: [
            { name: "Ginger Beard", note: "Amazing dirty chais.", url: "https://gingerbeardcoffee.com/" },
            { name: "Armature Works", note: "A food hall like Optimist Hall.", url: "https://armatureworks.com/" },
            { name: "Sparkman Wharf", note: "Outdoor food hall with bar.", url: "https://sparkmanwharf.com/" }
          ]
        },
        {
          title: "Dinner / Dessert",
          items: [
            { name: "Haven", note: "Bougie American food. Sister restaurant to Bern's Steakhouse. If you tell them it's a special occasion they can probably get you a reso at the dessert room (that's how we got it).", url: "https://haventampa.com/" },
            { name: "Rooster and the Till", note: "Also bougie, more fusion, so good.", url: "http://www.roosterandthetill.com/" },
            { name: "Dessert Room at Bern's Steakhouse", note: "Only dessert — and cute little booths.", url: "https://bernssteakhouse.com/harry-waugh-dessert-room/" }
          ]
        }
      ]
    },

    {
      slug: "new-orleans",
      name: "New Orleans",
      country: "Louisiana, USA",
      category: "cities",
      gradient: 5,
      photoCard: "img/travel/new-orleans-1.jpg",
      photoHero: "img/travel/new-orleans-2.jpg",
      intro: "Short list of NOLA favorites.",
      sections: [
        {
          title: "Picks",
          items: [
            { name: "Turkey and the Wolf", note: "Sandwiches." },
            { name: "Drago's", note: "Char-grilled oysters." },
            { name: "The Three Muses", note: "Date night — live music, food, drinks. Make a reso." },
            { name: "Lafitte's Blacksmith Shop" },
            { name: "St. Roch Market", note: "Brunch." }
          ]
        }
      ]
    },

    {
      slug: "carolina-beach",
      name: "Carolina Beach",
      country: "North Carolina, USA",
      category: "cities",
      gradient: 4,
      photoCard: "img/travel/carolina-beach-2.jpg",
      photoHero: "img/travel/carolina-beach-1.jpg",
      intro: "Small beach town just south of Wilmington with a cute downtown — lots of little shops and restaurants.",
      sections: [
        {
          title: "Picks",
          items: [
            { name: "Nollie's Tacos", note: "Honestly really good taco spot." },
            { name: "Seawitch Cafe & Tiki Bar", note: "Good dinner, fun environment, good drinks. Live music some nights." },
            { name: "High Tide Lounge & Tiki Bar", note: "Good drinks and nice views, has a boardwalk." },
            { name: "Britt's Donuts", note: "Amazing — but you will have to wait in line." },
            { name: "Crush and Grind", note: "Best coffee shop." }
          ]
        }
      ]
    },

    {
      slug: "wilmington",
      name: "Wilmington",
      country: "North Carolina, USA",
      category: "cities",
      gradient: 4,
      intro: "Quick list — Wilmington needs more love.",
      sections: [
        {
          title: "Picks",
          items: [
            { name: "Seabird" }
          ]
        }
      ]
    },

    {
      slug: "nyc",
      name: "New York City",
      country: "USA",
      category: "cities",
      gradient: 5,
      intro: "Quick picks.",
      sections: [
        {
          title: "Picks",
          items: [
            { name: "Emmy Squared", note: "Detroit-style pizza." }
          ]
        }
      ]
    },

    // ────────── INTERNATIONAL & BEACH ──────────

    {
      slug: "puerto-vallarta",
      name: "Puerto Vallarta",
      country: "Mexico",
      category: "international",
      gradient: 3,
      intro: "PV is split into a few neighborhoods: Zona Romántica (\"Old Town\" — tons of restaurants and shops), El Centro (just north — same energy), Malecón Boardwalk (in El Centro, boardwalk along the water with shops/bars/restaurants), and the Hotel Zone (further north, not walkable, a few nice restaurants).",
      sections: [
        {
          title: "Restaurants",
          items: [
            { name: "De Cántaro", note: "Zona Romántica, pretty casual, good amount of space." },
            { name: "Joe Jack's Fish Shack", note: "Zona Romántica, pretty casual, cool upstairs, incredible fish." },
            { name: "Coco's Kitchen", note: "Breakfast & lunch — Zona Romántica." },
            { name: "Restaurant Casa Nicole", note: "Brunch spot — Zona Romántica." },
            { name: "Campomar", note: "Seafood, in Hotel Zone. Amazing, fresh, and not that expensive for being a pretty nice restaurant." },
            { name: "Mariscos Cisneros Restaurant", note: "Zona Romántica. Hole in the wall but delicious." },
            { name: "Macareno", note: "Cute little restaurant in Zona Romántica. Delicious and so cheap. Quesadillas were amazing." },
            { name: "Taco Memo's Grill", note: "Street food open super late in Zona Romántica. AMAZING. Looks sketchy but DELICIOUS." },
            { name: "Trio", note: "Nice Italian restaurant in El Centro." },
            { name: "La Lèche", note: "All-white modern restaurant with a DJ, in Hotel Zone." },
            { name: "Don Chava", note: "Taqueria — Zona Romántica." },
            { name: "Gaby's Restaurant", note: "Cozy lunch spot — Zona Romántica." },
            { name: "La Chaquita Bakery", note: "Cheap, good bakery — Zona Romántica." },
            { name: "B of Bros Coffee", note: "Cute courtyard coffee place — Zona Romántica." }
          ]
        },
        {
          title: "Bars",
          items: [
            { name: "Bar La Playa", note: "Zona Romántica — cute tiny cocktail bar, delicious drinks." },
            { name: "El Colibrí", note: "Speakeasy cocktail bar." },
            { name: "Zoo Bar", note: "Club along Malecón." },
            { name: "Mandala Puerto Vallarta", note: "Club along Malecón." },
            { name: "Yambak", note: "Rooftop brewery in El Centro." },
            { name: "Andale", note: "Tourist friendly, big bar in Zona Romántica." },
            { name: "La Bodeguita", note: "Restaurant and salsa bar in El Centro." },
            { name: "Co-De", note: "Late night spot in Zona Romántica." },
            { name: "Bar Morelos", note: "Club in El Centro, right by El Colibrí." }
          ]
        },
        {
          title: "Beaches",
          items: [
            { name: "Boca de Tomatlán", note: "Fishing village." },
            { name: "Playa Colomitos", note: "Can only get to by boat. Tiny, pretty, can be crowded. Tiny little bar on it." },
            { name: "Playa Las Animas", note: "Can only get to by boat. Long strip, a lot of restaurants/bars on the water, parasailing. Very pretty." }
          ]
        }
      ]
    },

    {
      slug: "croatia",
      name: "Split & Hvar",
      country: "Croatia",
      category: "international",
      gradient: 2,
      intro: "Omg amazing. We were in Split and Hvar — recs below are mostly Split. If you have the time, take a boat to Hvar for the day — small enough to see in a day and so beautiful.",
      sections: [
        {
          title: "Beaches & Walks",
          items: [
            { name: "Jezinac Beach", note: "Our preference. A bit outside the city but a very quick Uber. You can walk along the coast for about half a mile to Jadran beach bar — get a drink or rent their lounge chairs." },
            { name: "Bačvice Beach" },
            { name: "Old town walk", note: "There is so much culture right in the center of Split — we just walked through it all. Hard to miss." },
            { name: "Kavana Procaffe", note: "Cute coffee shop. A little outside the city center but beautiful views of the port." }
          ]
        },
        {
          title: "Restaurants",
          items: [
            { name: "Šug", note: "Michelin bib restaurant. We did their tasting menu — 7 courses, amazing, huge portions for a tasting menu so come hungry. Lot of seafood so make sure you like that. Make a reservation!" },
            { name: "Restaurant Boom Split", note: "Unsuspecting but delicious. We went for lunch — more casual. I had squid ink risotto (amazing) and Tom had a seafood platter with mussels, prawns, etc." },
            { name: "Fig", note: "Apparently they have multiple locations. Great for breakfast — we went to the one in Hvar. I had fig flatbread and Tom had an egg dish. So yummy!" }
          ]
        },
        {
          title: "Day Trip",
          items: [
            { name: "Hvar (boat from Split)", note: "If you have the time, highly recommend. So beautiful and small — easy to see in a day." }
          ]
        }
      ]
    },

    {
      slug: "tulum",
      name: "Tulum",
      country: "Mexico",
      category: "international",
      gradient: 3,
      intro: "Quick list from a Tulum trip.",
      sections: [
        {
          title: "Picks",
          items: [
            { name: "Mateo's", note: "Bar with sunset and music until 10." },
            { name: "Batey Mojito & Guarapo Bar", note: "Mojito bar." },
            { name: "Bombaler", note: "Band." },
            { name: "Panna e Cioccolato" }
          ]
        }
      ]
    },

    {
      slug: "hawaii",
      name: "Big Island & Kauai",
      country: "Hawaii, USA",
      category: "cities",
      visited: ["2022-03"],
      gradient: 2,
      intro: "Ten days hopping islands — Big Island first, then Kauai, ending with a night in Honolulu. Rent a 4WD on the Big Island, it's 100% worth it. The road to Hana on Maui needs a small car if you go.",
      sections: [
        {
          title: "Big Island — Kona",
          items: [
            { name: "Da Poke Shack", note: "THE BEST POKE we had. You must stop here." },
            { name: "Hula Daddy / Hala Tree Coffee Tour", note: "Highly recommend doing a coffee farm tour in Kona. We couldn't get a reservation at Hula Daddy so we did Hala Tree, which was AWESOME. If you want Hula Daddy, book online in advance.", url: "https://www.huladaddy.com/visitor-center-and-tasting-room" },
            { name: "Kona Luau", note: "We did the Kona Luau — reserve ahead. A bit touristy but still fun to learn about Hawaiian culture. Open bar and a ton of food (which was really good).", url: "https://www.konaluau.com/tickets" },
            { name: "Captain Cook Monument (kayak + snorkel)", note: "We rented a double kayak from Bay Side Adventures and paddled out. Didn't see dolphins this time but two sea turtles swam next to our kayak. One of the coolest things we did.", url: "https://www.baysideadventures.com/" },
            { name: "Makalawena Beach", note: "Heads up: ~2 mile hike from parking. We were told it's the most beautiful beach. It is really beautiful, but not sure it was worth the hike." },
            { name: "Snorkel gear", note: "We bought our own snorkel gear from Walmart and carried it around. Didn't use it as much as we could have (our masks weren't great), but there's snorkeling at almost every beach you visit." }
          ]
        },
        {
          title: "Big Island — Hilo & South",
          items: [
            { name: "Volcano National Park", note: "SO cool, highly recommend. You can easily do most of the trails in a day. We woke up early and drove down Chain of Craters Road to the ocean to watch the sunrise — definitely a highlight. We also got lucky and saw active lava off one of the trails (the rangers will tell you if any is active). We did Kilauea Iki Crater Trail, Thurston Lava Tubes, and Old Crater Rim Drive (and drove Crater Rim Drive)." },
            { name: "Mauna Kea (sunset + stargazing)", note: "SO cool. 14,000-ft summit — you can do it on your own (in your car) as long as you have 4WD. We rented a Jeep. You have to wait at the visitor center for 30 mins to acclimate (don't skip — altitude sickness is real). Bring warm clothes — I'm talking sweatshirt, socks, sweatpants, blankets. It will be 40°F or less even if Kona is 90°F. The drive back at night, if clear, you'll see more stars than you ever imagined.", url: "https://maunakea.com/" },
            { name: "Carlsmith Beach Park (Hilo)", note: "Sea turtle beach. SO cool — we saw 2 massive sea turtles and swam pretty close. If you stay long enough you're very likely to see them. Stay 6 ft away and don't touch/feed (apparently a $10k fine)." },
            { name: "Akaka Falls", note: "Cool to see, a little touristy but impressive. ~0.5 mile loop. $5–10 pp entrance." },
            { name: "Rainbow Falls", note: "Right in Hilo, super quick to visit — no hiking, just drive in." },
            { name: "Poke Market (Hilo)", note: "Good, not the best poke we had but still really good.", url: "https://www.pokemarkethi.com/" },
            { name: "South Point & Green Sand Beach", note: "We did Green Sand Beach but missed South Point (don't make our mistake — they're only 10 mins apart!). We hiked to Green Sand Beach (~2–3 miles) and then paid the locals $20 to drive us back. So cool. Cliff jumping from South Point is supposed to be awesome too." }
          ]
        },
        {
          title: "Kauai — North Shore",
          items: [
            { name: "Tunnels Beach", note: "Amazing beach. Can be hard to park — go early or plan to wait a bit. We went early afternoon and parked right away (got lucky)." },
            { name: "Kauapea Beach (Secret Beach)", note: "Our favorite beach. ~0.3 mile hike down — but SO worth it. Because of the hike it's less crowded, and just beautiful." },
            { name: "Queen's Bath", note: "Tried to do this but it was closed (tides too high). Friends said: wear hiking shoes and bring just a towel — the hike down is hard, so less is more." },
            { name: "Na Pali Coast (Kalalau) Trail", note: "8 mile hike. Famous stretch of coast you can only access by hike or boat." },
            { name: "Kilauea Fish Market", note: "Amazing fish burritos." },
            { name: "Hanalei Poke", note: "We went back multiple times. Second favorite poke behind Da Poke Shack." },
            { name: "Trilogy Coffee & Tea Bar", note: "Amazing coffee, their lattes are amazing." },
            { name: "Anini Beach" }
          ]
        },
        {
          title: "Kauai — South Shore",
          items: [
            { name: "Helicopter Tour", note: "If you do one thing, do this. Mauna Loa Helicopters' doors-off tour was amazing. ~1 hour, not cheap but worth every penny. Around 90% of the island is owned by some family who bought it in the 1800s — most of it you can only see by helicopter." },
            { name: "Waimea Canyon — Canyon Trail to Waipoo Falls", note: "3.2 miles. Not too bad, gives you a good sense of how big the canyon is. Ends at a really pretty waterfall." },
            { name: "Japanese Grandma's Cafe" },
            { name: "JoJo's Shaved Ice" }
          ]
        },
        {
          title: "Where to Stay",
          items: [
            { name: "Big Island, Kona — Airbnb on coffee farm", note: "Basic guest house below the host's house. Private entrance/unit. About 10 mins south of downtown Kona, close to beaches and coffee farms. They have fruit plants in their yard — you can cut anything down! We ate a fresh papaya that was amazing.", url: "https://www.airbnb.com/rooms/48268899" },
            { name: "Big Island, Hilo — Airbnb on lava rock", note: "The COOLEST place we've ever stayed. On lava rock, very deserted, so cool. ~45 min south of Hilo and ~1 hour from Volcanos National Park — plan accordingly.", url: "https://www.airbnb.com/rooms/plus/22196849" },
            { name: "Kauai, Princeville (North Shore)", note: "We found Kauai accommodations expensive. This place was basic but fine — no proper kitchen (a few appliances but you use the bathroom sink), and we had trouble with parking (had to park a few lots over). Not a big deal." },
            { name: "Kauai, Poipu (South Shore) — Kiahuna Plantation Resort", note: "Hotel condos right next to the Sheraton. Quite nice (a bit outdated but nice). Private beach with towels and chairs, laundry onsite. Factor in the resort fee.", url: "https://www.outrigger.com/hotels-resorts/hawaii/kauai/kiahuna-plantation-resort-kauai-by-outrigger" }
          ]
        }
      ]
    },

    {
      slug: "st-emilion",
      name: "St. Émilion",
      country: "France",
      category: "international",
      visited: ["2022-05"],
      gradient: 3,
      intro: "Wine country day trip — bike between châteaux. Tip: most châteaux require booking ahead via email or website, but some accept walk-ins/calls.",
      sections: [
        {
          title: "Châteaux We Visited",
          items: [
            { name: "Château de Pressac", note: "Best view from the hill (per Lucy). The 4-wine tasting (€20) was a steal — we skipped the private tour at €120 since the same tour non-private was 1/6 the cost.", url: "https://www.chateaudepressac.com/" },
            { name: "Château Franc-Mayne", note: "Tour & 3-wine tasting — booked ahead." },
            { name: "Château Cardinal Villamaurine", note: "Tour with 3 glasses, 30 min." },
            { name: "Château de Candale", note: "3 glasses, 30 min." }
          ]
        },
        {
          title: "Other Châteaux to Consider",
          items: [
            { name: "Château Cantenac", note: "Classic tour with 3-wine tasting (€12.50) or prestige with 4 wines + bread & cheese (€30). Have to book via email.", url: "https://www.chateau-cantenac.fr/en/visit-us/" },
            { name: "Château Guadet", note: "2-vintage tasting, 1 hour, €20. Book via email.", url: "http://www.chateauguadet.fr/contact/" },
            { name: "Château La Dominique", note: "Several options including a wine & chocolate pairing (€50), 4-vintage tasting (€45), or blind tasting (€35). Some tours sell out — be open to any.", url: "https://reservation.chateau-ladominique.com/en/" },
            { name: "Château Fonrazade", note: "Didn't respond to email but you can probably show up or call." },
            { name: "Château Coutet", note: "Can call before coming." }
          ]
        },
        {
          title: "Logistics",
          items: [
            { name: "Bike rental", note: "Bicyclettes de St. Émilion — pickup in the morning, drop off in the evening." },
            { name: "Picnic lunch / walk around", note: "Les Cordeliers." }
          ]
        }
      ]
    },

    {
      slug: "australia",
      name: "Australia (East Coast)",
      country: "Australia",
      category: "international",
      visited: ["2019-05"],
      gradient: 2,
      intro: "Ten days from Sydney up to Brisbane via campervan — Blue Mountains, Byron Bay, Gold Coast. Original wishlist + what we actually did, below.",
      sections: [
        {
          title: "Sydney",
          items: [
            { name: "Opera Bar", note: "We came back here multiple times — perfect for a sunset drink with the Opera House right there." },
            { name: "Bondi to Coogee coastal walk" },
            { name: "Bondi Icebergs Club" },
            { name: "Featherdale Wildlife Park", note: "You can hold koalas here!" },
            { name: "Walk across the Sydney Harbour Bridge" },
            { name: "Ferry to Manly Beach" }
          ]
        },
        {
          title: "Blue Mountains",
          items: [
            { name: "Three Sisters", note: "Hiking." },
            { name: "Hanging Rock" }
          ]
        },
        {
          title: "Byron Bay",
          items: [
            { name: "Let's Go Surfing", note: "Where we did our surf lesson." },
            { name: "Bayger", note: "Burgers." },
            { name: "Suffolk Bakery" },
            { name: "Bam Bam Bakehouse" },
            { name: "Maddog Beach Surf" },
            { name: "Tea Tree Lake (Lismore area)", note: "One side beach, one side lake — was on our wishlist." }
          ]
        },
        {
          title: "Gold Coast & Brisbane",
          items: [
            { name: "Currumbin Wildlife Sanctuary", note: "HOLD KOALA. Gold Coast." },
            { name: "D-Bah surf break", note: "Heavy but cool to watch surfers." },
            { name: "Snappers", note: "Surfing — Gold Coast." },
            { name: "Lone Pine Koala Sanctuary", note: "Brisbane — you can hold koalas here too." }
          ]
        },
        {
          title: "Still on the Wishlist",
          items: [
            { name: "Melbourne", note: "Graphite art." },
            { name: "Big Banana", note: "Coffs Harbour." },
            { name: "Big Shrimp/Prawn" },
            { name: "Mooloolaba", note: "More touristy." }
          ]
        }
      ]
    },

    {
      slug: "yosemite",
      name: "Yosemite",
      country: "California, USA",
      category: "outdoors",
      visited: ["2024-07"],
      gradient: 4,
      intro: "Hikes from a 2024 California trip — Santa Barbara wedding, then Sequoia, then Yosemite.",
      sections: [
        {
          title: "Hikes",
          items: [
            { name: "Upper Yosemite Falls" },
            { name: "Mist Trail to Nevada Falls", note: "First half of Half Dome." }
          ]
        }
      ]
    }

  ],

  itineraries: [
    {
      slug: "paris-3day",
      name: "Paris",
      location: "France",
      duration: "3 days",
      gradient: 3,
      intro: "Three-day route through the classics — Champs-Élysées, Louvre, Versailles, Sacré-Cœur — with fondue at Refuge des Fondus and shopping in Le Marais.",
      days: [
        {
          label: "Monday — Right Bank classics",
          items: [
            "Champs-Élysées",
            "Arc de Triomphe",
            "Place de la Concorde",
            "Tuileries",
            "Louvre",
            "Pont Neuf",
            "Notre-Dame",
            "Chez Janou (maybe)",
            "Montparnasse",
            "Luxembourg Gardens",
            "7pm — Les Enfants Rouges"
          ]
        },
        {
          label: "Tuesday — Day trip + Sacré-Cœur",
          items: [
            "9am — ASP visit",
            "Bougival",
            "1pm — Versailles",
            "Sacré-Cœur",
            "9:30pm — Refuge des Fondus"
          ]
        },
        {
          label: "Wednesday — Marais + shopping",
          items: [
            "Marais shopping",
            "12:30 — Aux Crus de Bourgogne",
            "Galeries Lafayette",
            "Champs-Élysées"
          ]
        }
      ]
    }
  ],

  wishlist: [
    { name: "London — Borough Market, Tate, London Bridge, Tower Bridge, walk the Thames", location: "England" },
    { name: "Toronto", location: "Canada" },
    { name: "Quebec City", location: "Canada" },
    { name: "Tremblant", location: "Canada" },
    { name: "New Hampshire", location: "USA" },
    { name: "Washington DC", location: "USA" },
    { name: "Nashville", location: "USA" },
    { name: "Baton Rouge", location: "USA" },
    { name: "Austin", location: "USA" },
    { name: "Dallas", location: "USA" },
    { name: "Las Vegas", location: "USA" },
    { name: "Zion National Park", location: "USA" }
  ]
};
