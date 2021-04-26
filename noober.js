window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  console.log(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code

  //Recipe:

  //Create a variable for the rides data
  let ride = json.rides
  console.log(ride)

  // Loop through the rides data
  for(let i = 0; i < ride.length; i++) {

    // Create a variable to store each ride in memory
    let temp = ride[i]

    // Create a variable for the HTML element we're going to add to
    let list = document.querySelector(`.rides`)

    // Insert HTML into the rides element, using the data from each product
    // and the given formatting. If the ride is a X, show the X formatting
    // if the ride is a XL, show that formatting, etc.
    if(temp.purpleRequested == true){
      // If Noober purple, use that formatting
      list.insertAdjacentHTML(`beforeend`,
        `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>Noober Purple</span>
        </h1>

        <div class="border-4 border-gray-500 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${temp.passengerDetails.first} ${temp.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${temp.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
                ${temp.numberOfPassengers}
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${temp.pickupLocation.address}</p>
              <p>${temp.pickupLocation.city}, ${temp.pickupLocation.state} ${temp.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${temp.dropoffLocation.address}</p>
              <p>${temp.dropoffLocation.city}, ${temp.dropoffLocation.state} ${temp.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>`
      )
    }
    else if(temp.numPassengers > 3){
      // If not purple requested but number of passengers is greater than 3, 
      // use Noober XL formatting
      list.insertAdjacentHTML(`beforeend`,
      `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober XL</span>
      </h1>

      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${temp.passengerDetails.first} ${temp.passengerDetails.last}</h2>
            <p class="font-bold text-gray-600">${temp.passengerDetails.phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              ${temp.numberOfPassengers}
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${temp.pickupLocation.address}</p>
            <p>${temp.pickupLocation.city}, ${temp.pickupLocation.state} ${temp.pickupLocation.zip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${temp.dropoffLocation.address}</p>
            <p>${temp.dropoffLocation.city}, ${temp.dropoffLocation.state} ${temp.dropoffLocation.zip}</p>
          </div>
        </div>
      </div>`
      )
    }

    else {
      // If not purple and there are 3 or fewer passengers, it's X, so use X formatting
      list.insertAdjacentHTML(`beforeend`,
      `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober X</span>
      </h1>

      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${temp.passengerDetails.first} ${temp.passengerDetails.last}</h2>
            <p class="font-bold text-gray-600">${temp.passengerDetails.phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              ${temp.numberOfPassengers}
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${temp.pickupLocation.address}</p>
            <p>${temp.pickupLocation.city}, ${temp.pickupLocation.state} ${temp.pickupLocation.zip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${temp.dropoffLocation.address}</p>
            <p>${temp.dropoffLocation.city}, ${temp.dropoffLocation.state} ${temp.dropoffLocation.zip}</p>
          </div>
        </div>
      </div>`
      )
    }
  }

})