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
  height: "48m",
  yearBuilt: "70AD",
  purpose: "Entertainment"
},
conversations: [
  {
    host: "Welcome to Egypt! The home of the great pyramids of Giza. My name is Anubis.",
    traveller: "Hi Anubis!"
  },
  {
    host: "As you can see the pyramids are huge, they are over 450ft tall.",
    traveller: "Wow! Why are they so tall?"
  },
   {
     host: "The pyramids were built 3,800 years ago. They were created to allow the kings of Egypt to succeed in the afterlife.",
     traveller: "Awesome, what's inside the pyramid?"
   },
   {
     host: "Treasures and items for Pharaoh's to use in the afterlife.",
     traveller: "Wowza, the afterlife in Egypt must have been really interesting!"
   },
   {
     host: "Have fun on your journey!",
     traveller: "See you later!"
   }
]
},
{
  details: {
    name: "The Colosseum",
    location: "Rome, Italy",
    longitude: 12.4922,
    latitude: 41.8902,
    image: "https://aws-tiqets-cdn.imgix.net/images/content/b3a66adfc33a4c1f9d8480800ee981c9.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=4abba25e2d648ad83e1a22d7f34af5a4&w=400&h=320&dpr=2.625",
    height: "48m",
    yearBuilt: "70AD",
    purpose: "Entertainment"
  },
  conversations: [
    {
      host: "Welcome to Egypt! The home of the great pyramids of Giza. My name is Anubis.",
      traveller: "Hi Anubis!"
    },
    {
      host: "As you can see the pyramids are huge, they are over 450ft tall.",
      traveller: "Wow! Why are they so tall?"
    },
     {
       host: "The pyramids were built 3,800 years ago. They were created to allow the kings of Egypt to succeed in the afterlife.",
       traveller: "Awesome, what's inside the pyramid?"
     },
     {
       host: "Treasures and items for Pharaoh's to use in the afterlife.",
       traveller: "Wowza, the afterlife in Egypt must have been really interesting!"
     },
     {
       host: "Have fun on your journey!",
       traveller: "See you later!"
     }
  ]
}
]);
