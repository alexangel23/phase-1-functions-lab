// Distance from hq in Blocks function
function distanceFromHqInBlocks(Blocks){
    const hqLocation = 42;
    if(Blocks > hqLocation){
        return (Blocks - hqLocation);
    }
    else {
        return (hqLocation - Blocks)
    }
}
// Covert previous function into feet 
// Create the function and then return the previous function times the conversion number for feet in a block
function distanceFromHqInFeet(Blocks){
    return distanceFromHqInBlocks(Blocks)*264;
}
// Calculate the number of feet a passanger travels given a starting block and a ending block
// Subtract the difference traveled and convert it to feet by multiplying by 264
function distanceTravelledInFeet(start, destination){
    if(start < destination){
        return (destination - start) * 264;
    }
    else {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance < 400){
        return 0;
    }
    else if (distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance < 2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}
