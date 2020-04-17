/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const newcard = document.querySelector('.cards')
const followersArray = ["tetondan",
    "dustinmyers",
    "justsml",
    "luishrd",
    "bigknell",
    "miahmo652"
];
// Make a request for a user with a given ID
followersArray.forEach((follow) => {
    axios.get(`https://api.github.com/users/${follow}`)
        .then(function(response) {
            newcard.appendChild(makecard(response.data));
            // handle success

            console.log(response.data);
            //response.data.forEach((item) => {
            //  const varone = document.createElement('')

            // })

        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })
})


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
function makecard(obj) {
    const card = document.createElement('div'),
        img = document.createElement('img'),
        cardInfo = document.createElement('div'),
        Name = document.createElement('h3'),
        UserName = document.createElement('p'),
        Location = document.createElement('p'),
        Profile = document.createElement('p'),
        anchor = document.createElement('a'),
        Followers = document.createElement('p'),
        Following = document.createElement('p'),
        Bio = document.createElement('p');



    card.appendChild(img);
    card.appendChild(cardInfo);
    cardInfo.appendChild(Name);
    cardInfo.appendChild(UserName);
    cardInfo.appendChild(Location);
    cardInfo.appendChild(Profile);
    Profile.appendChild(anchor);
    cardInfo.appendChild(Followers);
    cardInfo.appendChild(Following);
    cardInfo.appendChild(Bio);


    card.classList.add('card');
    cardInfo.classList.add('card-info');
    Name.classList.add('name');
    UserName.classList.add('username');

    img.src = obj.avatar_url;
    UserName.textContent = obj.login;
    Name.textContent = obj.name;
    Location.textContent = obj.location;
    anchor.href = obj.html_url;
    Followers.textContent = obj.followers;
    Following.textContent = obj.following;
    Bio.textContent = obj.bio;

    return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/