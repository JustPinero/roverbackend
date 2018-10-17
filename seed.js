const db = require("./db");
const Pets = require("./db/models/pets");
const Vets = require("./db/models/vets");
const Bluebird = require("bluebird");

const pets = [{
  "name": "Pixel",
  "photo": "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/22184327/Siberian-Husky-on-White-12-800x600-1.jpg",
  "bio": "Pixel is a quarter werewolf."
}, {
  "name": "Louie",
  "photo": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjB-L6BvI7eAhXIT98KHfVnBj8QjRx6BAgBEAU&url=https%3A%2F%2Ftwitter.com%2Funidentifiedape&psig=AOvVaw375js7FzuoM2qMRft4VYlQ&ust=1539899799857640",
  "bio": "Louie is King"
}, {
  "name": "Lily",
  "photo": "https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/487568273.jpg?itok=2Bdyj8fB&resize=1100x1100",
  "bio": "Lily currently works at the UN."
}, {
  "name": "Betty",
  "photo": "https://orig00.deviantart.net/73d6/f/2017/364/7/a/giant_squid_by_rampartpress-dbyc9jy.jpg",
  "bio": "Betty is a Fullbright scholar."
}];

const vets = [
  {
    "firstName": "Arthur",
    "lastName": "MacNugget",
    "photo": "https://i.ytimg.com/vi/Nh-QOzHmr5s/hqdefault.jpg",
    "email": "aMacnugs@earthlink.com",
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
    "photo": "https://vignette.wikia.nocookie.net/metalocalypse/images/d/d2/Nathe.jpg/revision/latest?cb=20140128080840",
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
  return Bluebird.all(
    Bluebird.map(pets, pet => {
        console.log("THE PET", pet)
      return(
        Pets.create(pet)
      );
    }),
    Bluebird.map(vets, vet => {
      console.log("THE VET", vet)
      return(
        Vets.create(vet)
      );
    })
  );
  
};
const main = () => {
  console.log("Syncing db...");
  db.sync({ force: true })
    .then(() => {
      console.log("Seeding database...");
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
