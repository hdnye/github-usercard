/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
 axios.get('https://api.github.com/users/hdnye') 

        .then((response) => {
          console.log(response);

          response.data.user_url.forEach((card) => {
          const userData = new userCard(card); 
         
          cards.appendChild(userData);
         });

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
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
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
function githubCard(userData){

  const userCard = document.createElement('div');
  const userImage = document.createElement('img');
  const userInfo = document.createElement('div');
  const githubName = document.createElement('h3');
  const userName = document.createElement('p');  
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');


  userCard.classList.add('card');
  userImage.src = imgSrc;
  userInfo.classList.add('card-info');
  githubName.classList.add('name');
  userName.classList.add('username');

  userData.forEach( (item) => {  
    
    container.appendChild(githubCard(item));
  
  })


  userInfo.appendChild(githubName);
  userInfo.appendChild(userName);
  userInfo.appendChild(userLocation);
  userInfo.appendChild(userProfile);
  userInfo.appendChild(userFollowers);
  userInfo.appendChild(userFollowing);
  userInfo.appendChild(userBio);
  
  userCard.appendChild(userImage);
  userCard.appendChild(userInfo);

  return githubCard;
} 

console.log(githubCard(userData[i]));
console.log(githubCard(followersArray[i]));

axios.post('https://api.github.com/users/hdnye/followers')
  .then((response) => {
  console.log(response);

   response.data.followers_url.forEach((card) => {
    const newEntry = new FriendsCard(card); 
 
   cards.appendChild(newEntry);
  });

})

.catch((error) => {
console.log(error);
});



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

/*--Class Notes--

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