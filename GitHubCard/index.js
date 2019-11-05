/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const cards = document.querySelector('.cards');

 axios
 
 .get('https://api.github.com/users/hdnye') 

        .then(response => {

          const cardNew = githubCard(response);

          cards.appendChild(cardNew);

          return cards;
        })
        

         .catch((error) => {
      console.log(error);
     });

 

/*/
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github userNames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="userName">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
 
const followersArray = axios;


axios
  .get('https://api.github.com/users/hdnye/followers')
  .then(response => {
   
      response.data.forEach(followers => 

        axios.get('https://api.github.com/users/hdnye/${followers.login}')

        .then(response => { 
        
        return cards.appendChild(githubCard(response.data));
    })
    .catch(error => console.log(error))
      );
  })
     .catch(error => console.log(error));

  

console.log(followersArray);

let githubCard = (data) => {

  const card = document.createElement('div');
  const userImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p'); 
  const a = document.createElement('a')   
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');
 
  card.appendChild(userImage);
  card.appendChild(cardInfo)
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfile);
  cardInfo.appendChild(a);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);


  card.classList.add('card');
  userImage.classList.add('img');
  cardInfo.classList.add('card-info');
  name.classList.add('card-info');
  userName.classList.add('card-info');
  userLocation.classList.add('card-info');
  userProfile.classList.add('card-info');
  a.classList.add('card-info');
  userFollowers.classList.add('card-info');
  userFollowing.classList.add('card-info');
  userBio.classList.add('card-info');

 userImage.src = data.avatar_url;
 name.textContent = data.name;
 userName.textContent = data.login;
 userLocation.textContent = data.location;
 a.link = data.html_url;
 userFollowers.textContent = data.followers;
 userFollowing.textContent = data.following;
 userBio.textContent = data.bio;
 
return card;
  
} 


/* List of LS Instructors Github userName's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell



--Class Notes--

create, read, update and delete: CRUD App (ex: fb, twitter)

axios requests for each of the above: 
http methods
.post => Create
.get => Read
.put => Update
.delete => Delete


.then & .catch block ex: 

.then((res) => {
  console.log('res');
})

.catch((err) => {
  console.log(err);
});

     
component to display the axios data

function SomeComponent(imgSrc) {

    const newThing = document.createElement('div');
    newThing.classList.add('css-class');

    const newImg = document.createElement('img');
    newImg.src = imgSrc;

    newThing.appendChild(newImg);

    return newThing;
}

const body (or whichever container class holds the children) = document.querySelector('.body);

import axios for project

ex: 
  axios  or axios.get().then().catch();
    .get('')
    .then((res) => {
      res.data.message(or some value from the array being referenced).forEach((item) => {
        const newThingEntry = new SomeCard(item); //don't need but helpful if adding constructors later//
        entry.appendChild(newThingEntry);
        console.log(item);
    });

  })
    .catch((err) => {
      console.log(err);
}); 
*/