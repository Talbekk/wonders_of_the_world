use wonders_of_the_world;
db.dropDatabase();

db.wonders.insertMany([
{
  details: {

  name: "The Colosseum",
  location: "Rome, Italy",
  longitude: 12.4964,
  latitude: 41.9028,
  image: "https://aws-tiqets-cdn.imgix.net/images/content/b3a66adfc33a4c1f9d8480800ee981c9.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=4abba25e2d648ad83e1a22d7f34af5a4&w=400&h=320&dpr=2.625",
  imageGallery: ["https://www.stpetertravel.com/travels/7072_big.jpg","https://media.tacdn.com/media/attractions-splice-spp-674x446/07/12/29/8f.jpg","https://www.checkoutsam.com/wp-content/uploads/2018/02/coliseum-seats-levels.jpg","http://www.canyon-news.com/wp-content/uploads/2015/03/Colosseum_in_Rome_Italy_-_April_2007.jpg","http://www.astarlifts.com/aureo-df/files/image.php?width=800&height=400&cropratio=2:1&image=/public/sites/astarlifts/pages/files/68542728/297/IMAGE1/coliseo.jpg"],
  height: "48m",
  yearBuilt: "70AD",
  purpose: "Entertainment",
  description: "The Colosseum is a large amphitheatre in the city of Rome. Building of the Colosseum started around 70–72 AD and finished in 80 AD. Emperor Vespasian started the job, and Emperor Titus completed it. Emperor Domitian made some changes to the building between 81–96 AD. It had seating for 50,000 people. It was 156 metres wide, 189 metres long and 57 metres tall. It is the biggest amphitheatre built by the Roman Empire.",
  description2: "The Colosseum was first called the Flavian Amphitheatre or in Latin, the Amphitheatrum Flavium. This was after Vespasian and Titus who had the family name of Flavius. It was used for gladiator contests, and other shows like animal hunts, in which animals would hunt and eat prisoners, or in which gladiators would fight against animals. There were also plays and battle scenes. Sometimes it was filled with water to fight sea battles. The people of Rome could go into the Colosseum for free.",
  description3: "In the Middle Ages the performances stopped. It was then used as housing, workshops, a Christian shrine, and as a supply of building stones. It is now a ruin because of earthquakes. The Colosseum is a symbol of the Roman Empire. It is one of Rome's most popular tourist spots. On Good Fridays, the Pope leads a torch lit Way of the Cross walk around the building."
},
conversations: [
  {
    host: "Ciao $USERNAME, welcome to Italia! The home of the Colosseum. My name is Laura.",
    hostImage: "conversation/host_italian.png",
    traveller: "Hi Laura!",
    travellerImage: "conversation/traveller.png"
  },
  {
    host: "Do you see how the building doesn't look finished? That's because an earthquake damaged it a long time ago",
    hostImage: "conversation/host_italian.png",
    traveller: "Wow! It still looks so cool! How old is it?",
    travellerImage: "conversation/traveller.png"
  },
   {
     host: "The Colosseum was built by the Romans in 80 A.D, almost 2000 years ago.",
     hostImage: "conversation/host_italian.png",
     traveller: "Incredible, what was it used for?",
     travellerImage: "conversation/traveller_heart_eye.png"
   },
   {
     host: "Many things, but it is most famous for gladiator fights",
     hostImage: "conversation/host_italian.png",
     traveller: "Cool, the Romans must have been very smart!",
     travellerImage: "conversation/traveller.png"
   },
   {
     host: "Enjoy the rest of your trip! Ciao!",
     hostImage: "conversation/host_italian.png",
     traveller: "Catch you later!",
     travellerImage: "conversation/traveller.png"
   }
]
},
{
  details: {
    name: "Petra",
    location: "Ma'an Governorate, Jordan",
    longitude: 35.444832,
    latitude: 30.328960,
    image: "https://lonelyplanetimages.imgix.net/a/g/hi/t/2bf1faac5c1e26d5cb94128cf762517a-petra.jpg",
    imageGallery: ["https://img.etimg.com/thumb/msid-63249335,width-643,imgsize-63886,resizemode-4/jordans-petra-a-keeper-of-secrets.jpg","https://www.fodors.com/wp-content/uploads/2018/08/Hero-Petra-101-dreamstime_xl_45315552.jpg","https://s3.amazonaws.com/images.gearjunkie.com/uploads/2019/01/Five-adventures-in-jordan-PETRA.jpg"],
    height: "23m",
    yearBuilt: "400bc",
    purpose: "Trading city",
    description: "Petra is a very old city in southern Jordan. It is a city among the mountains that run from the Dead Sea to the Gulf of Aqaba. Petra is believed to have been built as early as 9,000 BC. It became the capital city of the Nabataean Kingdom. The Nabataeans were nomadic Arabs who used Petra because it was near the spice trade roads.",
    description2: "The Nabataean Kingdom was taken over by the Roman Empire in the 100 BC. In 106 AD they lost their independence. Petra's importance fell as sea trade routes developed. Also, the earthquake in 363 AD destroyed many structures.",
    description3: "The Byzantine Empire led to the building of many Christian churches, but the city soon disappeared. By the early Islamic Empire only a handful of nomads lived in Petra. It stayed unknown to the world until it was rediscovered in 1812 by Johann Ludwig Burckhardt."
  },
  conversations: [
    {
      host: "As-salam alaykom $USERNAME, welcome to Jordan! The home of the great city of Petra. My name is Maria.",
      hostImage: "conversation/host.png",
      traveller: "Hi Maria!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "As you can see not much is left of the great city of Petra.",
      hostImage: "conversation/host.png",
      traveller: "Wow! What happened here?",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "An earthquake destroyed many of the buildings and most people left the city a long time ago.",
      hostImage: "conversation/host.png",
      traveller: "Aww, why did they leave?",
      travellerImage: "conversation/traveller_heart_eye.png"
    },
    {
      host: "Petra used be a busy place for buying spices and other goods. But after a while, boats became a faster way of getting the same things.",
      hostImage: "conversation/host.png",
      traveller: "Woah, this place is like a ghost town!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "It is, let's get out of here!",
      hostImage: "conversation/host_smile.png",
      traveller: "Ok, goodbye!",
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
    image: "https://estonianworld.com/wp-content/uploads/2018/02/Christ-the-Redeemer-I-1024x640.jpg",
    imageGallery: ["https://www.stpetertravel.com/travels/7072_big.jpg","https://media.tacdn.com/media/attractions-splice-spp-674x446/07/12/29/8f.jpg","https://www.checkoutsam.com/wp-content/uploads/2018/02/coliseum-seats-levels.jpg  "],
    height: "30m",
    yearBuilt: "1922",
    purpose: "Entertainment",
    description: "Christ the Redeemer is a statue of Jesus Christ in Rio de Janeiro, Brazil. It was made by French sculptor Paul Landowski, Brazilian engineer Heitor da Silva Costa and French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida made the face. Built between 1922 and 1931, the statue is 30 metres (98 ft) high, take away the 8-metre (26 ft) stone. The arms stretch 28 metres (92 ft) wide.",
    description2: "The statue weighs 635 metric tons (625 long, 700 short tons) and is at the top of the 700 metre (2,300 ft) Corcovado mountain which looks over Rio de Janeiro. A symbol of Christianity around the world, the statue has also become an icon of both Rio de Janeiro and Brazil. It is made with concrete and soapstone.",
    description3: "In 1990, many Brazilian companies, including the Archdiocese of Rio de Janeiro, media company Grupo Globo, oil company Shell do Brasil, environmental regulator IBAMA, National Institute of Historic and Artistic Heritage, and the city government of Rio de Janeiro made a plan to start restoration work."
  },
  conversations: [
    {
      host: "Olá $USERNAME, welcome to Brazil! The home of Christ the Redeemer. My name is Julia.",
      hostImage: "conversation/host.png",
      traveller: "Hi Julia!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "Did you know that the statue was made by a French and Brazialian engineer. Then the head was made by a Romanian sculptor.",
      hostImage: "conversation/host.png",
      traveller: "Wow! How tall is it?",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "It's 30 metres high with a wingspan of 28 metres.",
      hostImage: "conversation/host.png",
      traveller: "Awesome, he would be a great swimmer!",
      travellerImage: "conversation/traveller_heart_eye.png"
    },
    {
      host: "The statue is a symbol of Christianity and is the newest member of the 7 Wonders of the World.",
      hostImage: "conversation/host.png",
      traveller: "That's so cool, I want to go to Brazil someday!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "Tchau! All the best on your journey!",
      hostImage: "conversation/host_smile.png",
      traveller: "See you next time!",
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
    description: "The Great Wall of China is a huge wall in China. It is made of cement, rocks and powdered dirt. It was built to protect the empire of China from enemy attacks. It is the longest structure humans have ever built. It is about 21,196 kilometres (13,171 miles) long, 9.1 metres (30 feet) wide and 15 metres (50 feet) high.",
    description2: "In the early days the wall was made of compacted dirt and stone. Later in the Ming Dynasty they used bricks. There are 7,000 watch towers, houses for soldiers and fire-pits to send smoke signals.",
    description3: "Nineteen walls have been built that were called the Great Wall of China. The first was built in the 7th century BC. The most famous wall was built between 226–200 BC by the first Emperor of Imperial China, Qin Shai Hong. Not much of this wall is left as people have been stealing from it. It was much farther north than the current wall. The current wall was built during the Ming Dynasty.",
  },
  conversations: [
    {
      host: "Nǐ hǎo $USERNAME, welcome to China! The home of the Great Wall. My name is Yuli.",
      hostImage: "conversation/host_chinese.png",
      traveller: "Hi Yuli!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "As you can see the Great Wall is very long, it's over 21,196 kilometres long.",
      hostImage: "conversation/host_chinese.png",
      traveller: "Wow! Why is it so long?",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "The wall was made to keep out attacks from the north from the Mongols, Huns and other tribes.",
      hostImage: "conversation/host_chinese.png",
      traveller: "Awesome, it must have taken a long time to build!",
      travellerImage: "conversation/traveller_heart_eye.png"
    },
    {
      host: "You're right! The Ming Dynasty took well over 200 years to finish the wall.",
      hostImage: "conversation/host_chinese.png",
      traveller: "Oh my goodness! That's such a long time. I would get very bored...",
      travellerImage: "conversation/traveller_cringe_eye.png"
    },
    {
      host: "Don't worry, I think we all would have! Enjoy the rest of your trip!",
      hostImage: "conversation/host_chinese.png",
      traveller: "Thanks for the tour, bye!",
      travellerImage: "conversation/traveller.png"
    }
  ]
},
{
  details: {
    name: "Machu Picchu",
    location: "Peru",
    longitude: -72.545128,
    latitude: -13.163068,
    image: "https://static.dezeen.com/uploads/2019/06/machu-pichu-airport-peru-barclay-crousse-dezeen-hero.jpg",
    imageGallery: ["https://www.fodors.com/wp-content/uploads/2018/09/HERo_MachuPicchu101_Hero_4_MachuPicchu101_WhereCanIGetBestPhoto_dreamstime_xxl_110067560_2_1.jpg","https://i.ytimg.com/vi/lNIEZ61PyG0/maxresdefault.jpg","https://www.nationalgeographic.com/content/dam/travel/2017-digital/family-travel/machu-picchu-family-travel.jpg"],
    height: "2430m",
    yearBuilt: "1450",
    purpose: "A country estate for the Incan Emperor Pachacuti",
    description: "Machu Picchu is a pre-Columbian 15th-century Inca site in Peru, in South America. The Incas built the city over mountains, 2430m above sea level. They lived there between 1200 and 1450 AD. Other people lived there before about 650 AD.",
    description2: "The Incas built houses, fields and temples by cutting the rock on the mountain so it was flat. They built an observatory to look at the stars.",
    description3: "When the Spanish came to Peru, the Incas left Machu Picchu. Nobody knows why they did that, but some people think it was because of diseases from Europe. The city was never finished, because of the Spanish and/or a civil war between the rival Inca brothers named Huascar and Atahualpa. The Spanish never found Machu Picchu or the lost city during their time there."
  },
  conversations: [
    {
      host: "Hola $USERNAME, welcome to Peru! The home of Machu Picchu. My name is Jose.",
      hostImage: "conversation/host.png",
      traveller: "Hi Jose!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "As you can see Machu Picchu is very high up in the mountains.",
      hostImage: "conversation/host.png",
      traveller: "Wow! How high are we right now?",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "We are about 2430 metres above the ground",
      hostImage: "conversation/host.png",
      traveller: "Awesome, why did they build it here?",
      travellerImage: "conversation/traveller_heart_eye.png"
    },
    {
      host: "The Incan Emperor wanted a private garden for himself out of the way of the busy life of the town.",
      hostImage: "conversation/host.png",
      traveller: "Cool! I wish I had a garden this big!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "Maybe someday you will!",
      hostImage: "conversation/host_smile.png",
      traveller: "Ok, how do I get down now?",
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
    description: "The Taj Mahal is a tomb built in the 1600s by the Mughal king Shah Jahan in memory of his wife, Mumtaz Mahal. She was his 3rd wife.",
    description2: "The building is in the city of Agra, Uttar Pradesh. It is thought of as one of the most beautiful buildings in the world, it is one of India's biggest tourist attractions.",
    description3: "The Taj Mahal was built with materials from all over the world Over 20,000 people were used to move the materials. It is thought that Ustad Ahmad Lahauri was in charge of building. It was finished in 1653.",
  },
  conversations: [
    {
      host: "Namaste $USERNAME, welcome to India! The home of the Taj Mahal. My name is Isha.",
      hostImage: "conversation/host.png",
      traveller: "Hi Isha!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "The Taj Mahal is very beautiful, many people think it's one of the best looking buildings in the world.",
      hostImage: "conversation/host.png",
      traveller: "Wow! Why was it built?",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "It was built by a Mughal king in memory of his third wife.",
      hostImage: "conversation/host.png",
      traveller: "Awesome, how long did it take to build?",
      travellerImage: "conversation/traveller_heart_eye.png"
    },
    {
      host: "It took over 20 years to finish with more than 20,000 people helping.",
      hostImage: "conversation/host.png",
      traveller: "Incredible, that's a lot of people!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "It is indeed! Now good luck on the rest of your tour!",
      hostImage: "conversation/host_smile.png",
      traveller: "I'm excited to see what is next!",
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
    description: "Chichén Itzá is a large Mayan city famous for a large, pyramid temple built by the Maya civilization. It is on the Yucatán Peninsula, about 120 km to the east of Mérida. The temple, called Castillo, is about 1 km in diameter. There are many temples and pyramids at Chichen Itza",
    description2: "Tourists, or visitors, were once able to climb some of the pyramids, but it was quite challenging because the steps are very steep and small. Climbing is no longer permitted.",
    description3: "This is the largest pyramid at Chichen Itza, and dedicated to Kukulkan, the Plumed Serpent. Every year on the fall and spring equinox the sun hits the side of the building making a show of light and shadow which looks like a snake along the steps of the building.",
  },
  conversations: [
    {
      host: "Hola $USERNAME, welcome to Mexico! The home of the Chichen Itza. My name is Julia.",
      hostImage: "conversation/host.png",
      traveller: "Hola Julia!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "The Egyptians weren't the only ones who built pyramids.",
      hostImage: "conversation/host.png",
      traveller: "Oh my, it's so hot here!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "The Mayans built these tall buildings to celebrate their leaders. ",
      hostImage: "conversation/host.png",
      traveller: "Nice, can I climb it?",
      travellerImage: "conversation/traveller_heart_eye.png"
    },
    {
      host: "I'm sorry but no, the steps are very steep and small so climbing is very hard.",
      hostImage: "conversation/host.png",
      traveller: "Aww, it's still so cool!",
      travellerImage: "conversation/traveller.png"
    },
    {
      host: "Hasta la vista!",
      hostImage: "conversation/host_smile.png",
      traveller: "Adios!",
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
        image: "https://nationalpostcom.files.wordpress.com/2018/02/gettyimages-540409466.jpg?quality=80&strip=all&w=780",
        correct: false
      },
      {
        image: "https://cdn.britannica.com/88/189788-050-9B5DB3A4/Al-Dayr-Petra-Jordan.jpg",
        correct: false
      }
    ]
  },
  {
    question: "Near which wonder you can eat a local pizza?",
    answers: [
      {
        image: "https://cdn.britannica.com/88/189788-050-9B5DB3A4/Al-Dayr-Petra-Jordan.jpg",
        correct: false
      },
      {
        image: "https://www.planetware.com/wpimages/2019/05/italy-rome-colosseum-visiting-highlights-tips-tours.jpg",
        correct: true
      },
      {
        image: "https://nationalpostcom.files.wordpress.com/2018/02/gettyimages-540409466.jpg?quality=80&strip=all&w=780",
        correct: false
      },
      {
        image: "https://classicalwisdom.com/wp-content/uploads/2019/05/02_Seven-Wonders-Giza_GIF.gif",
        correct: false
      },
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
        image: "https://cdn.britannica.com/88/189788-050-9B5DB3A4/Al-Dayr-Petra-Jordan.jpg",
        correct: false
      }
    ]
  },
  {
    question: "Which wonder can be found in Jordan?",
    answers: [
      {
        image: "https://cdn.britannica.com/88/189788-050-9B5DB3A4/Al-Dayr-Petra-Jordan.jpg",
        correct: true
      },
      {
        image: "https://www.bionic-ads.com/wp-content/uploads/2015/11/chinese-wall.jpg",
        correct: false
      },
      {
        image: "https://classicalwisdom.com/wp-content/uploads/2019/05/02_Seven-Wonders-Giza_GIF.gif",
        correct: false
      },
      {
        image: "https://aws-tiqets-cdn.imgix.net/images/content/b3a66adfc33a4c1f9d8480800ee981c9.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=4abba25e2d648ad83e1a22d7f34af5a4&w=400&h=320&dpr=2.625",
        correct: false
      }
    ]
  },
  {
    question: "Which wonder can be found in the highest altitude?",
    answers: [
      {
        image: "https://cdn.britannica.com/88/189788-050-9B5DB3A4/Al-Dayr-Petra-Jordan.jpg",
        correct: false
      },
      {
        image: "https://nationalpostcom.files.wordpress.com/2018/02/gettyimages-540409466.jpg?quality=80&strip=all&w=780",
        correct: true
      },
      {
        image: "https://classicalwisdom.com/wp-content/uploads/2019/05/02_Seven-Wonders-Giza_GIF.gif",
        correct: false
      },
      {
        image: "https://aws-tiqets-cdn.imgix.net/images/content/b3a66adfc33a4c1f9d8480800ee981c9.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=4abba25e2d648ad83e1a22d7f34af5a4&w=400&h=320&dpr=2.625",
        correct: false
      }
    ]
  },
  {
    question: "Which wonder was used as an arena for gladiators?",
    answers: [
      {
        image: "https://cdn.britannica.com/88/189788-050-9B5DB3A4/Al-Dayr-Petra-Jordan.jpg",
        correct: false
      },
      {
        image: "https://nationalpostcom.files.wordpress.com/2018/02/gettyimages-540409466.jpg?quality=80&strip=all&w=780",
        correct: false
      },
      {
        image: "https://classicalwisdom.com/wp-content/uploads/2019/05/02_Seven-Wonders-Giza_GIF.gif",
        correct: false
      },
      {
        image: "https://www.planetware.com/wpimages/2019/05/italy-rome-colosseum-visiting-highlights-tips-tours.jpg",
        correct: true
      }
    ]
  },
  {
    question: "Which wonder took several empires over 2000 years to complete?",
    answers: [
      {
        image: "https://cdn.britannica.com/88/189788-050-9B5DB3A4/Al-Dayr-Petra-Jordan.jpg",
        correct: false
      },
      {
        image: "https://cdn.cnn.com/cnnnext/dam/assets/170305125355-christ-the-redeemer-rio-vr-exlarge-169.jpg",
        correct: false
      },
      {
        image: "https://www.snopes.com/tachyon/2018/07/great_wall_of_china.jpg?resize=865,452",
        correct: true
      },
      {
        image: "https://www.planetware.com/wpimages/2019/05/italy-rome-colosseum-visiting-highlights-tips-tours.jpg",
        correct: false
      }
    ]
  },
  {
    question: "Which wonder is also called the Rose City",
    answers: [
      {
        image: "https://i2-prod.mirror.co.uk/incoming/article14254709.ece/ALTERNATES/s615/0_Al-Khazneh-The-Treasury-Petra-Jordan.jpg",
        correct: true
      },
      {
        image: "https://cdn.cnn.com/cnnnext/dam/assets/170305125355-christ-the-redeemer-rio-vr-exlarge-169.jpg",
        correct: false
      },
      {
        image: "https://www.snopes.com/tachyon/2018/07/great_wall_of_china.jpg?resize=865,452",
        correct: false
      },
      {
        image: "https://www.planetware.com/wpimages/2019/05/italy-rome-colosseum-visiting-highlights-tips-tours.jpg",
        correct: false
      }
    ]
  },
  {
    question: "Which one is a statue?",
    answers: [
      {
        image: "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg",
        correct: false
      },
      {
        image: "https://nowinrio.com/wp-content/uploads/2017/04/Design-sem-nome-20.jpg",
        correct: true
      },
      {
        image: "https://www.snopes.com/tachyon/2018/07/great_wall_of_china.jpg?resize=865,452",
        correct: false
      },
      {
        image: "https://image.insider.com/5d23699621a86135cf770125?width=1100&format=jpeg&auto=webp",
        correct: false
      }
    ]
  },
  {
    question: "Which wonder has an area of approximately 353 square kilometers?",
    answers: [
      {
        image: "https://www.discoverchina.com/upload/pics/thumbs/089021e1ea7024febfce5d34ef544e5b.jpg",
        correct: false
      },
      {
        image: "https://www.nationalgeographic.com/content/dam/travel/photos/000/930/93080.ngsversion.1482510710570.adapt.1900.1.jpg",
        correct: false
      },
      {
        image: "https://cdn.britannica.com/30/178930-050-A9761BDF/El-Castillo-Chichen-Itza-Yucatan-Mexico.jpg",
        correct: false
      },
      {
        image: "https://cdn.getyourguide.com/img/location_img-1570-3285976407-148.jpg",
        correct: true
      }
    ]
  },
  {
    question: "Which wonder was build by the Mayan civilization?",
    answers: [
      {
        image: "https://www.tripsavvy.com/thmb/zV-hETZ3tpf7M9-rYqt5-NDbiXo=/1414x1414/smart/filters:no_upscale()/colosseum-at-sunrise-5c29a35646e0fb00014aaba0.jpg",
        correct: false
      },
      {
        image: "https://www.secretoo.com/wp-content/uploads/2019/10/Chichen-Itza-At-Your-Own-Pace-1.jpg",
        correct: true
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTReM79sN_Mbjquzo-K-YFRWZnaSHxHr-kgeRd_oMji8OoSF4sQ7Q&s",
        correct: false
      },
      {
        image: "https://cdn.getyourguide.com/img/location_img-1570-3285976407-148.jpg",
        correct: false
      }
    ]
  },
  {
    question: "Which wonder took over 20 years and 20,000 people to be completed?",
    answers: [
      {
        image: "https://lp-cms-production.imgix.net/news/2019/06/taj-mahal.jpg?q=25",
        correct: true
      },
      {
        image: "https://humansofdata.atlan.com/wp-content/uploads/2019/08/Giza_pyramids.png",
        correct: false
      },
      {
        image: "https://d1hbkx7j13ujdz.cloudfront.net/wp-content/uploads/2018/10/The-Colosseum-Rome-1024x695.jpg",
        correct: false
      },
      {
        image: "https://www.ancient.eu/img/r/p/500x600/3048.jpg?v=1485680877",
        correct: false
      }
    ]
  },
]);
