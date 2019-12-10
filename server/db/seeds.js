use wonders_of_the_world;
db.dropDatabase();

db.wonders.insertMany([
{
  details: {

  name: "The Colosseum",
  location: "Rome, Italy",
  longitude: 41.8902,
  latitude: 12.4922,
  image: "https://aws-tiqets-cdn.imgix.net/images/content/b3a66adfc33a4c1f9d8480800ee981c9.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=4abba25e2d648ad83e1a22d7f34af5a4&w=400&h=320&dpr=2.625",
  imageGallery: ["https://www.stpetertravel.com/travels/7072_big.jpg","https://media.tacdn.com/media/attractions-splice-spp-674x446/07/12/29/8f.jpg","https://www.checkoutsam.com/wp-content/uploads/2018/02/coliseum-seats-levels.jpg","http://www.canyon-news.com/wp-content/uploads/2015/03/Colosseum_in_Rome_Italy_-_April_2007.jpg","http://www.astarlifts.com/aureo-df/files/image.php?width=800&height=400&cropratio=2:1&image=/public/sites/astarlifts/pages/files/68542728/297/IMAGE1/coliseo.jpg"],
  height: "48m",
  yearBuilt: "70AD",
  purpose: "Entertainment",
  description: "The Colosseum, originally known as the Flavian Amphitheatre, is a large amphitheatre in the city of Rome. The construction of the Colosseum started around 70–72 AD and was finished in 80 AD. Emperor Vespasian started the works, and Emperor Titus completed them. Emperor Domitian made some changes to the building between 81–96 AD. It had seating for 50,000 people. It was 156 metres wide, 189 metres long and 57 metres tall. It is the biggest amphitheatre built by the Roman Empire.",
  description2: "The Colosseum was first called the Flavian Amphitheatre or in Latin, the Amphitheatrum Flavium. This was after Vespasian and Titus who had the family name of Flavius. It was used for gladiatorial contests, and other shows like animal hunts, in which animals would hunt and eat prisoners; or in which gladiators would fight against animals. There were also executions of prisoners, plays, and battle scenes; sometimes it was filled with water to fight sea battles. The people of Rome could go into the Colosseum without any costs; it was free.",
  description3: "In the Middle Ages it was no longer used for performances. It was then used as housing, workshops, a Christian shrine, and as a supply of building stones. It is now a ruin because of earthquakes. The Colosseum is a symbol of the Roman Empire. It is one of Rome's most popular tourist attractions. On Good Fridays, the Pope leads a torch lit Way of the Cross procession around the various levels of the amphitheatre."
},
conversations: [
  {
    host: "Welcome to Egypt! The home of the great pyramids of Giza. My name is Anubis.",
    hotstImage: "./conversations/host.png",
    traveller: "Hi Anubis!",
    travellerImage: "conversation/traveller.png"
  },
  {
    host: "As you can see the pyramids are huge, they are over 450ft tall.",
    hotstImage: "./conversations/host.png",
    traveller: "Wow! Why are they so tall?",
    travellerImage: "./conversations/traveller.png"
  },
   {
     host: "The pyramids were built 3,800 years ago. They were created to allow the kings of Egypt to succeed in the afterlife.",
     hotstImage: "./conversations/host.png",
     traveller: "Awesome, what's inside the pyramid?",
     travellerImage: "./conversations/traveller_heart_eye.png"
   },
   {
     host: "Treasures and items for Pharaoh's to use in the afterlife.",
     hotstImage: "./conversations/host.png",
     traveller: "Wowza, the afterlife in Egypt must have been really interesting!",
     travellerImage: "./conversations/traveller.png"
   },
   {
     host: "Have fun on your journey!",
     hotstImage: "./conversations/host_smile.png",
     traveller: "See you later!",
     travellerImage: "./conversations/traveller.png"
   }
]
},
{
  details: {
    name: "Petra",
    location: "Ma'an Governorate, Jordan",
    longitude: 30.3285,
    latitude: 35.4444,
    image: "https://lonelyplanetimages.imgix.net/a/g/hi/t/2bf1faac5c1e26d5cb94128cf762517a-petra.jpg",
    imageGallery: ["https://img.etimg.com/thumb/msid-63249335,width-643,imgsize-63886,resizemode-4/jordans-petra-a-keeper-of-secrets.jpg","https://www.fodors.com/wp-content/uploads/2018/08/Hero-Petra-101-dreamstime_xl_45315552.jpg","https://s3.amazonaws.com/images.gearjunkie.com/uploads/2019/01/Five-adventures-in-jordan-PETRA.jpg"],
    height: "23m",
    yearBuilt: "400bc",
    purpose: "rocks",
    description: "Petra is a historical and archaeological city in southern Jordan. It is in a basin among the mountains that run from the Dead Sea to the Gulf of Aqaba. Petra is believed to have been settled as early as 9,000 BC. It became the capital city of the Nabataean Kingdom. The Nabataeans were nomadic Arabs who used Petra because it was near the spice trade routes.",
    description2: "The Nabataean Kingdom became a client state of the Roman Empire in the first century BC. iIn 106 AD they lost their independence. Petra's importance declined as sea trade routes developed. Also, the 363 earthquake destroyed many structures.",
    description3: "The Byzantine Era led to the construction of several Christian churches, but the city continued to decline. By the early Islamic era only a handful of nomads lived in Petra. It stayed unknown to the world until it was rediscovered in 1812 by Johann Ludwig Burckhardt."
  },
  conversations: [
    {
      host: "Welcome to Egypt! The home of the great pyramids of Giza. My name is Anubis.",
      hostImage: "conversation/host.png",
      traveller: "Hi Anubis!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "As you can see the pyramids are huge, they are over 450ft tall.",
      hostImage: "conversation/host.png",
      traveller: "Wow! Why are they so tall?",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "The pyramids were built 3,800 years ago. They were created to allow the kings of Egypt to succeed in the afterlife.",
      hostImage: "conversation/host.png",
      traveller: "Awesome, what's inside the pyramid?",
      travellerImage: "conversation/traveller_heart_eye.png"
    },
    {
      host: "Treasures and items for Pharaoh's to use in the afterlife.",
      hostImage: "conversation/host.png",
      traveller: "Wowza, the afterlife in Egypt must have been really interesting!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "Have fun on your journey!",
      hostImage: "conversation/host_smile.png",
      traveller: "See you later!",
      travellerImage: "conversation/traveller.png"
    }
  ]
},
{
  details: {
    name: "Christ the Redeemer",
    location: "Rio de Janeiro, Brazil",
    longitude: -42.2436,
    latitude: -22.2212,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Cristo_Redentor_-_Rio_de_Janeiro%2C_Brasil.jpg",
    imageGallery: ["https://www.stpetertravel.com/travels/7072_big.jpg","https://media.tacdn.com/media/attractions-splice-spp-674x446/07/12/29/8f.jpg","https://www.checkoutsam.com/wp-content/uploads/2018/02/coliseum-seats-levels.jpg  "],
    height: "30m",
    yearBuilt: "1922",
    purpose: "Entertainment",
    description: "Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida fashioned the face. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal. The arms stretch 28 metres (92 ft) wide.",
    description2: "The statue weighs 635 metric tons (625 long, 700 short tons), and is located at the peak of the 700-metre (2,300 ft) Corcovado mountain in the Tijuca Forest National Park overlooking the city of Rio de Janeiro. A symbol of Christianity across the world, the statue has also become a cultural icon of both Rio de Janeiro and Brazil, and is listed as one of the New7Wonders of the World. It is made of reinforced concrete and soapstone.",
    description3: "In 1990, several organizations, including the Archdiocese of Rio de Janeiro, media company Grupo Globo, oil company Shell do Brasil, environmental regulator IBAMA, National Institute of Historic and Artistic Heritage, and the city government of Rio de Janeiro entered an agreement to conduct restoration work."
  },
  conversations: [
    {
      host: "Welcome to Brazil! The home of the Christ the Redeemer. My name is Julio.",
      hostImage: "conversation/host.png",
      traveller: "Hi Julio!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "As you can see the Christ the Redeemer is huge, they are over 450ft tall.",
      hostImage: "conversation/host.png",
      traveller: "Wow! Why are they so tall?",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "The pyramids were built 3,800 years ago. They were created to allow the kings of Egypt to succeed in the afterlife.",
      hostImage: "conversation/host.png",
      traveller: "Awesome, what's inside the pyramid?",
      travellerImage: "conversation/traveller_heart_eye.png"
    },
    {
      host: "Treasures and items for Pharaoh's to use in the afterlife.",
      hostImage: "conversation/host.png",
      traveller: "Wowza, the afterlife in Egypt must have been really interesting!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "Have fun on your journey!",
      hostImage: "conversation/host_smile.png",
      traveller: "See you later!",
      travellerImage: "conversation/traveller.png"
    }
  ]
},
{
  details: {
    name: "Great Wall of China",
    location: "Beijing, China",
    longitude: 116.5704,
    latitude: 40.4319,
    image: "https://cdn.britannica.com/82/94382-050-20CF23DB/Great-Wall-of-China-Beijing.jpg",
    imageGallery: ["https://d3jh33bzyw1wep.cloudfront.net/s3/W1siZiIsIjIwMTcvMDkvMjkvMDcvNDEvNDEvMTkyL1cxc2laaUlzSWpJd01UY3ZNRGt2TWpZdk1Ea3ZNelF2TWpndk56QXhMMmR5WldGMExYLmpwZyJdLFsicCIsInRodW1iIiwiMjAwMHg2MDBcdTAwM2UiXSxbInAiLCJvcHRpbWl6ZSJdXQ","https://www.snopes.com/tachyon/2018/07/great_wall_of_china.jpg?resize=865,452","https://www.greenandturquoise.com/wp-content/uploads/2019/02/Great-wall-of-China-Mutianyu.jpg"],
    height: "21,196 km",
    yearBuilt: "1368–1644",
    purpose: "Defensive wall",
    description: "The Great Wall of China is an ancient wall in China. The wall is made of cement, rocks and powdered dirt. It was built to protect the north of the empire of China from enemy attacks. It is the longest structure humans have ever built. It is about 21,196 kilometres (13,171 miles) long, 9.1 metres (30 feet) wide and 15 metres (50 feet) high.",
    description2: "The earlier sections on the wall are made of compacted dirt and stone. Later in the Ming Dynasty they used bricks. There are 7,000 watch towers, block houses for soldiers and beacons to send smoke signals.",
    description3: "Nineteen walls have been built that were called the Great Wall of China. The first was built in the 7th century BC. The most famous wall was built between 226–200 BC by the first Emperor of Imperial China, Qin Shai Hong. Not much of this wall will remain as people have been stealing from it. It was much farther north than the current wall. The current wall was built during the Ming Dynasty.",
  },
  conversations: [
    {
      host: "Welcome to Brazil! The home of the Christ the Redeemer. My name is Julio.",
      hostImage: "conversation/host.png",
      traveller: "Hi Julio!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "As you can see the Christ the Redeemer is huge, they are over 450ft tall.",
      hostImage: "conversation/host.png",
      traveller: "Wow! Why are they so tall?",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "The pyramids were built 3,800 years ago. They were created to allow the kings of Egypt to succeed in the afterlife.",
      hostImage: "conversation/host.png",
      traveller: "Awesome, what's inside the pyramid?",
      travellerImage: "conversation/traveller_heart_eye.png"
    },
    {
      host: "Treasures and items for Pharaoh's to use in the afterlife.",
      hostImage: "conversation/host.png",
      traveller: "Wowza, the afterlife in Egypt must have been really interesting!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "Have fun on your journey!",
      hostImage: "conversation/host_smile.png",
      traveller: "See you later!",
      travellerImage: "conversation/traveller.png"
    }
  ]
},
{
  details: {
    name: "Machu Picchu",
    location: "Peru",
    longitude: 72.5450,
    latitude: 13.1631,
    image: "",
    imageGallery: ["https://www.fodors.com/wp-content/uploads/2018/09/HERo_MachuPicchu101_Hero_4_MachuPicchu101_WhereCanIGetBestPhoto_dreamstime_xxl_110067560_2_1.jpg","https://i.ytimg.com/vi/lNIEZ61PyG0/maxresdefault.jpg","https://www.nationalgeographic.com/content/dam/travel/2017-digital/family-travel/machu-picchu-family-travel.jpg"],
    height: "2430m",
    yearBuilt: "1450",
    purpose: "built as a country estate for the Inca emperor Pachacuti",
    description: "Machu Picchu is a pre-Columbian 15th-century Inca site in Peru, in South America. The Incas built the city on a mountain ridge, 2430m above sea level. They lived there between 1200 and 1450 AD. Other people lived there before about 650 AD.",
    description2: "The Incas built houses, fields and temples by cutting the rock on the mountain so it was flat. They built an Observatory to look at the stars.",
    description3: "When the Spanish invaded Peru, the Incas left Machu Picchu. Nobody knows for sure why they did that, but some think it was because of diseases from Europe. The city was left unfinished, most likely due to the Spanish invasion and/or a civil war between the ruling rival Inca brothers named Huascar and Atahualpa. The Spanish never found Machu Picchu or the lost city during their occupation."
  },
  conversations: [
    {
      host: "Welcome to Brazil! The home of the Christ the Redeemer. My name is Julio.",
      hostImage: "conversation/host.png",
      traveller: "Hi Julio!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "As you can see the Christ the Redeemer is huge, they are over 450ft tall.",
      hostImage: "conversation/host.png",
      traveller: "Wow! Why are they so tall?",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "The pyramids were built 3,800 years ago. They were created to allow the kings of Egypt to succeed in the afterlife.",
      hostImage: "conversation/host.png",
      traveller: "Awesome, what's inside the pyramid?",
      travellerImage: "conversation/traveller_heart_eye.png"
    },
    {
      host: "Treasures and items for Pharaoh's to use in the afterlife.",
      hostImage: "conversation/host.png",
      traveller: "Wowza, the afterlife in Egypt must have been really interesting!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "Have fun on your journey!",
      hostImage: "conversation/host_smile.png",
      traveller: "See you later!",
      travellerImage: "conversation/traveller.png"
    }
  ]
},
{
  details: {
    name: " The Taj Mahal",
    location: "Agra, India",
    longitude: 78.0421,
    latitude: 27.1751,
    image: "https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-0-20151104113424.jpg",
    imageGallery: ["https://www.nationalgeographic.com/content/dam/travel/photos/000/930/93080.ngsversion.1482510710570.adapt.1900.1.jpg","https://lonelyplanetimages.imgix.net/mastheads/283389.jpg","https://static.toiimg.com/thumb/width-650,height-433,resize-true,resizeMode-5,photoid-68525014.cms"],
    height: "73m",
    yearBuilt: "1632",
    purpose: " tomb of the emperor and his wife",
    description: "The Taj Mahal is a tomb built in the 17th century by the Mughal king Shah Jahan in memory of his wife, Mumtaz Mahal. She was his 3rd wife. Eventually, Shah Jahan was entombed in the Taj Mahal with his wife.",
    description2: "The building is in the city of Agra, Uttar Pradesh. Widely thought of as one of the most beautiful buildings in the world, it is one of India's biggest tourist attractions.",
    description3: "The Taj Mahal was constructed with materials from all over the world, and over 20,000 people were used to move building materials. It is generally thought that Ustad Ahmad Lahauri was in charge of the construction. The construction was finished in 1653.",
  },
  conversations: [
    {
      host: "Welcome to Brazil! The home of the Christ the Redeemer. My name is Julio.",
      hostImage: "conversation/host.png",
      traveller: "Hi Julio!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "As you can see the Christ the Redeemer is huge, they are over 450ft tall.",
      hostImage: "conversation/host.png",
      traveller: "Wow! Why are they so tall?",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "The pyramids were built 3,800 years ago. They were created to allow the kings of Egypt to succeed in the afterlife.",
      hostImage: "conversation/host.png",
      traveller: "Awesome, what's inside the pyramid?",
      travellerImage: "conversation/traveller_heart_eye.png"
    },
    {
      host: "Treasures and items for Pharaoh's to use in the afterlife.",
      hostImage: "conversation/host.png",
      traveller: "Wowza, the afterlife in Egypt must have been really interesting!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "Have fun on your journey!",
      hostImage: "conversation/host_smile.png",
      traveller: "See you later!",
      travellerImage: "conversation/traveller.png"
    }
  ]
},
{
  details: {
    name: "Chichén Itzá",
    location: "Yucatan, Mexico",
    longitude: -88.5675,
    latitude: 20.6856,
    image: "https://cdn.britannica.com/49/61349-131-B30C16E2/El-Castillo-pyramid-plaza-Toltec-state-Yucatan.jpg",
    imageGallery: ["https://cdn.getyourguide.com/img/tour_img-1191968-146.jpg","https://media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/07/0a/d5/6c.jpg","http://cdn.cnn.com/cnnnext/dam/assets/161117132419-01-chichen-itza-restricted-1117-super-tease.jpg"],
    height: "98m",
    yearBuilt: "832 AD",
    purpose: "City",
    description: "hichén Itzá is a large Mayan city famous for a large, pyramid temple built by the Maya civilization. It is on the Yucatán Peninsula, about 120 km to the east of Mérida. The temple, called Castillo, is about 1 km in diameter. There are many temples and pyramids at Chichen Itza",
    description2: "Tourists, or visitors, were once able to climb some of the pyramids, but it was quite challenging because the steps are very steep and small. Climbing is no longer permitted.",
    description3: "This is the largest pyramid at Chichen Itza, and dedicated to Kukulkan, the Plumed Serpent. Every year on the fall and spring equinox the sun hits the side of the building making a show of light and shadow which looks like a snake along the steps of the building.",
  },
  conversations: [
    {
      host: "Welcome to Brazil! The home of the Christ the Redeemer. My name is Julio.",
      hostImage: "conversation/host.png",
      traveller: "Hi Julio!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "As you can see the Christ the Redeemer is huge, they are over 450ft tall.",
      hostImage: "conversation/host.png",
      traveller: "Wow! Why are they so tall?",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "The pyramids were built 3,800 years ago. They were created to allow the kings of Egypt to succeed in the afterlife.",
      hostImage: "conversation/host.png",
      traveller: "Awesome, what's inside the pyramid?",
      travellerImage: "conversation/traveller_heart_eye.png"
    },
    {
      host: "Treasures and items for Pharaoh's to use in the afterlife.",
      hostImage: "conversation/host.png",
      traveller: "Wowza, the afterlife in Egypt must have been really interesting!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "Have fun on your journey!",
      hostImage: "conversation/host_smile.png",
      traveller: "See you later!",
      travellerImage: "conversation/traveller.png"
    }
  ]
},
]);

db.quiz.insertMany([
  {
    question: "Which one is the longest wonder?",
    answers: [
      {
        image: "https://aws-tiqets-cdn.imgix.net/images/content/b3a66adfc33a4c1f9d8480800ee981c9.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=4abba25e2d648ad83e1a22d7f34af5a4&w=400&h=320&dpr=2.625",
        correct: false
      },
      {
        image: "https://www.bionic-ads.com/wp-content/uploads/2015/11/chinese-wall.jpg",
        correct: true
      },
      {
        image: "https://aws-tiqets-cdn.imgix.net/images/content/b3a66adfc33a4c1f9d8480800ee981c9.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=4abba25e2d648ad83e1a22d7f34af5a4&w=400&h=320&dpr=2.625",
        correct: false
      },
      {
        image: "https://aws-tiqets-cdn.imgix.net/images/content/b3a66adfc33a4c1f9d8480800ee981c9.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=4abba25e2d648ad83e1a22d7f34af5a4&w=400&h=320&dpr=2.625",
        correct: false
      }
    ]
  },
  {
    question: "Which one is the oldest wonder?",
    answers: [
      {
        image: "https://aws-tiqets-cdn.imgix.net/images/content/b3a66adfc33a4c1f9d8480800ee981c9.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=4abba25e2d648ad83e1a22d7f34af5a4&w=400&h=320&dpr=2.625",
        correct: false
      },
      {
        image: "https://www.bionic-ads.com/wp-content/uploads/2015/11/chinese-wall.jpg",
        correct: false
      },
      {
        image: "https://classicalwisdom.com/wp-content/uploads/2019/05/02_Seven-Wonders-Giza_GIF.gif",
        correct: true
      },
      {
        image: "https://aws-tiqets-cdn.imgix.net/images/content/b3a66adfc33a4c1f9d8480800ee981c9.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=4abba25e2d648ad83e1a22d7f34af5a4&w=400&h=320&dpr=2.625",
        correct: false
      }
    ]
  },
]);
