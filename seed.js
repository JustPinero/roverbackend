const db = require("./db");
const Pets = require("./db/models/pets");
const Vets = require("./db/models/vets");
const Bluebird = require("bluebird");

const pets = [{
  "name": "Pixel",
  "photo": "https://vignette1.wikia.nocookie.net/en.futurama/images/2/24/MarsUniversity.png/revision/latest?cb=20071224022054",
  "bio": "Pixel is a quarter werewolf."
}, {
  "name": "Louie",
  "photo": "https://theinfosphere.org/images/thumb/e/ef/Braino.png/175px-Braino.png",
  "bio": "Louie has retractable eyes"
}, {
  "name": "Lily",
  "photo": "https://vignette3.wikia.nocookie.net/starwars/images/5/55/Temple_Interior.png/revision/latest?cb=20150803133149",
  "bio": "Lily currently works at the UN."
}, {
  "name": "Betty",
  "photo": "http://www.collegerag.net/wp-content/uploads/2014/05/21.jpg",
  "bio": "Betty is a Fullbright scholar."
}];

const vets = [
  {
    "firstName": "Arthur",
    "lastName": "MacNugget",
    "photo": "https://i.ytimg.com/vi/Nh-QOzHmr5s/hqdefault.jpg",
    "email": "aMacnugs@earthlink.com"
  }, {
    "firstName": "Gilly",
    "lastName": "Fishman",
    "photo": "http://s3.amazonaws.com/trampt/images/products/000/006/660/The_Odorous_Fish_Man-Doktor_A-Koibito-trampt-6660m.jpg?1296055814",
    "email": "fishyG@waterlink.com"
  }, {
    "firstName": "Peter",
    lastName: "Parker",
    "photo": "https://weminoredinfilm.files.wordpress.com/2015/04/spider-man-origin.jpg",
    email: "mrpp@optimumonline.com",
  }
  , {
    firstName: "Nathan",
    lastName: "Explosion",
    "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiuteupzIzeAhVnc98KHQ1WD3UQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F809873945460690927%2F&psig=AOvVaw0p_1WByP5t76DOkj77HPgW&ust=1539835480193736",
    email: "natex@dethklok.com",
  }, {
    "firstName": "Beatrix",
    "lastName": "Kiddo",
    "photo": "https://www.writeups.org/wp-content/uploads/Bride-Beatrix-Kiddo-Kill-Bill-Uma-Thurman-h.jpg",
    "email": "thebride@aol.com",
  }, {
    "firstName": "Armitage",
    "lastName": "Wintermute",
    "photo": "https://vignette.wikia.nocookie.net/shadowrun/images/9/9b/Jake_Armitage.png/revision/latest?cb=20130731144558&path-prefix=en",
    "email": "nueromancer@razornet.com",
  }
];

const seed = () =>{
  Bluebird.map(pets, pet =>
    Pet.create(pet)
  );

  Bluebird.map(vets, vet =>
    Vet.create(vet)
  );
  
  }

const main = () => {
  console.log("Syncing db...");
  db.sync({ force: true })
    .then(() => {
      console.log("Seeding databse...");
      return seed();
    })
    .catch(err => {
      console.log("Error while seeding");
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });

  };

  main();
