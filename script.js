/* A vehicle needs 10 times the amount of fuel than the distance traveled, however it must carry a minimum of 100 fuel before it makes the trip, create a function that calculates the amount of fuel it needs given the distance */

distance = 2;
fuel = 0;

function calcFuel(distance) {
  fuel = distance * 10;
  console.log(`The vehicle needs ${fuel} gallons for this trip.`);
  if (fuel < 100){
    console.log(`The vehicle can not leave with ${fuel} gallons for this trip.`);
  } else {
    console.log(`The vehicle can leave with ${fuel} gallons for this trip.`);
  }
}

calcFuel(distance);