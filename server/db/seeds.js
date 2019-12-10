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
    travellerImage: "./conversations/traveller.png"
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
    name: "The Colosseum",
    location: "Rome, Italy",
    longitude: 41.8902,
    latitude: 12.4922,
    image: "https://aws-tiqets-cdn.imgix.net/images/content/b3a66adfc33a4c1f9d8480800ee981c9.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=4abba25e2d648ad83e1a22d7f34af5a4&w=400&h=320&dpr=2.625",
    imageGallery: ["https://www.stpetertravel.com/travels/7072_big.jpg","https://media.tacdn.com/media/attractions-splice-spp-674x446/07/12/29/8f.jpg","https://www.checkoutsam.com/wp-content/uploads/2018/02/coliseum-seats-levels.jpg  "],
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
    longitude: -22.951944,
    latitude: -43.210556,
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
