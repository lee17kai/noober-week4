window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code

  //Recipe:

  //Create a variable for the rides data
  let rides = json.Array(100)
  console.log(rides)

  // Loop through the rides data

    // Create a variable to store each ride in memory

    // Create a variable for the HTML element we're going to add to

    // Insert HTML into the rides element, using the data from each product
    // and the given formatting
  
})