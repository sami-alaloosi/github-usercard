import axios from 'axios';

const cards = document.querySelector('.cards')


axios.get('https://api.github.com/users/sami-alaloosi')
.then(response => cards.appendChild(cardCreater(response.data)) )
.catch(err => console.log('THERE IS A PROBLEM', err))

function cardCreater(obj) {

  const card = document.createElement('div')
  card.className = "card"

  const image = document.createElement('img')
  image.src = obj.avatar_url
  const info = document.createElement('div')
  info.className = "card-info"

  const name = document.createElement('h3')
  name.className ="name"
  name.innerText = obj.name

  const userName = document.createElement('p')
  userName.className = "username"
  userName.innerText = obj.login

  const location = document.createElement('p')
  location.innerText = `Location: ${obj.location}`

  const profile = document.createElement('p')
  profile.innerText = "Profile: "

  const address = document.createElement('a')
  address.href = obj.html_url
  address.innerText = obj.html_url
  
  const followers = document.createElement('p')
  followers.innerText = `Followers: ${obj.followers}`

  const following = document.createElement('p')
  following.innerText = `Following: ${obj.following}`

  const bio = document.createElement('p')
  bio.innerText = `Bio: ${obj.bio}`
  profile.appendChild(address)

  info.append(name, userName, location, profile, followers, following, bio )

  card.append(image, info)

  return card
}

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"   ];

followersArray.forEach(accounts =>{
  axios.get(`https://api.github.com/users/${accounts}`)
.then(response => cards.appendChild(cardCreater(response.data)) )
.catch(err => console.log('THERE IS A PROBLEM', err))
} )

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
