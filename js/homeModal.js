const sponsers = [
  {
    name: "Walk-On's Bistreaux & Bar",
    description:
      "There’s really no better way to describe the uniqueness of Walk-On’s Sports Bistreaux. We start every dish from scratch and use fresh ingredients to bring our mouthwatering, Cajun cuisine to life. And whether you’re here for dinner with the family, date night, cocktails with the girls or to watch a game on the big screen, we’re always happy to share our Louisiana culture with you.",
    img: "./imgs/bistreaux&bar.jpg",
    alt: "Bistreaux & Bar",
    btn: "https://walk-ons.com/",
  },
  {
    name: "Sheraton New Orleans Hotel",
    description:
      "Brimming with style and grounded in our community, Sheraton New Orleans Hotel is the perfect home base for your downtown escape. Located on Canal Street, our hotel is steps from the buzz of the French Quarter, and also offers seamless access to notable NOLA points of interest including the Ernest N. Morial Convention Center, Caesars Superdome and Smoothie King Center. Relax in our refined guest rooms and suites, which boast plush bedding, spacious work areas, modern technology and floor-to-ceiling windows overlooking the French Quarter and the Mississippi River.",
    img: "/imgs/sheraton.jpg",
    alt: "Sheraton hotel",
    btn: "https://www.marriott.com/en-us/hotels/msyis-sheraton-new-orleans-hotel/overview/",
  },
  {
    name: "Ace Hotel New Orleans",
    description:
      "A minute's walk from a streetcar stop, this hip boutique hotel in the Warehouse District is a 19-minute walk from Bourbon Street and a mile from Jackson Square. The fashionable rooms come with bespoke bed linens and handcrafted furnishings. All include free Wi-Fi, flat-screen TVs and minibars, plus designer toiletries. Suites add living rooms with turntables and acoustic guitars, while an upgraded bi-level suite offers a terrace and a wet bar. Room service is offered 24/7. There are 5 chic restaurants and bars. Other amenities include a rooftop pool, a 24-hour gym and a retro photo booth. There's regular live entertainment. Pets are welcome.",
    img: "/imgs/aceHotel.jpg",
    alt: "Ace hotel",
    btn: "https://acehotel.com/new-orleans/",
  },
  {
    name: "The Ritz-Carlton, New Orleans",
    description:
      "Rich in history and personality, New Orleans is unlike any other US city. Honoring its spirit and elegance, The Ritz-Carlton, New Orleans invites visitors to its French Quarter retreat, set within a 1908 Beaux Arts building. Here, one can bask in the silence of the hotel’s beautiful courtyard, experience the mysticism of the city through the spa’s Voodoo Ritual or learn how to play the trumpet with in-house jazz musician Jeremy Davenport.",
    img: "/imgs/theRitz.jpg",
    alt: "The Ritz hotel",
    btn: "https://www.ritzcarlton.com/en/hotels/new-orleans",
  },
  {
    name: "Premium parking, P402",
    description:
      "300 N Peters St, New Orleans, LA 70130",
    img: "/imgs/parking.jpg",
    alt: "Parking 402",
    btn: "https://www.premiumparking.com/P0402",
  },
  {
    name: "Louisiana Children's Museum",
    description:
      "What you experience as a child shapes the adult you become. That means you can change a child’s entire trajectory by giving them access to safe, innovative, and educational play experiences. And that’s the stuff we live for. We’re here to show children they matter. We exist to strengthen and support families. And we’re going to have so much fun while we do it.",
    img: "/imgs/Louisiana-Children’s-Museum.jpg",
    alt: "Louisiana Children's Museum",
    btn: "https://lcm.org/",
  },
  {
    name: "Museum of Death",
    description:
      "The Museum of Death experience is a self guided tour lasting approximately 45 minutes to an hour, however those who can stomach it may stay as long as they like, as there are hundreds of items on display. To ensure that you experience the entire museum we recommend arriving no later than an hour before the posted closing time for that day.",
    img: "/imgs/musem-of-death.jpg",
    alt: "Museum of Death",
    btn: "http://www.museumofdeath.net/",
  },
  {
    name: "Haunted Museum",
    description:
      "Many illuminating facets are part of New Orleans, they draw you in and cast a spell, but the underlying feeling of our sultry city comes from the Spirit of Place—the genus loci. A town has her own spirit, ours spreads from the river—through the square and deep into our hearts. Many who visit here feel as if they have been here before in past lives of old souls.",
    img: "/imgs/Haunted-Museum.jpg",
    alt: "Haunted Museum",
    btn: "https://www.bloodymarystours.com/",
  },
];

function show(i) {
  document.getElementById("modalTitle").innerText =
  sponsers[i].name;

  document.getElementById("modalImage").src = 
  sponsers[i].img;

  document.getElementById("modalImage").alt = 
  sponsers[i].alt;

  document.getElementById("modalDesc").innerText =
  sponsers[i].description;

  document.getElementById("modalBtn").href = 
  sponsers[i].btn;
}
