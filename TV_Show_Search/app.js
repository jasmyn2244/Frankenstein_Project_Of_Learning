const userInput = document.querySelector('#search');
const button = document.querySelector('button');
const form = document.querySelector('#searchForm');

console.log(userInput.elements)

//The following code wasn't effective becuase you can submit a form by pressing enter. So the defult isn't prevented unless they actaully click the button. So it's better to put an eventListener on the form and listen for a more generic 'submit'
// button.addEventListener('click', (e) => {
//   e.preventDefault()
// });

form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(userInput.value);
  const shows = getShows();
  console.log(shows)
  // const showsData = async getShows() => {
  //   await console.log(showsData);
  });

  // for (showData of showsData) {

  // }

// });

const getShows = async () => {
  try {
    const searchTerm = userInput.value;
      //This is the same as above. Not sure why you'd use the longer one, but it's what Colt does
      //form.elements.search.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    return res.data; 
  } catch (e) {
    console.log("ERROR", e);
  }
}

