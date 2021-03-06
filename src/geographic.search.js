

/*
    data : array of object with radianLatitude and radianLongitude properties
    maxDist : max radial distance from reference point
    R : EARTH_RADIUS
*/
function searchElementsWithinDistance( data, lat, long, maxDist, R ){
    let searchedItem = [];
    data.map( item => {
        let dist = findDistanceBetween( lat, long, item.radianLatitude, item.radianLongitude, R );
        if( dist <= maxDist ){
            searchedItem.push( item );
        }
    });
    return searchedItem;
}


function findDistanceBetween( lat1, long1, lat2, long2, R ){
    R = R ? R : 6371;
    let sin = Math.sin( lat1 ) * Math.sin( lat2 );
    let cos = Math.cos( lat1 ) * Math.cos( lat2 );
    let cosLong = Math.cos( long1 - long2 );
    return Math.acos( sin + cos * cosLong ) * R;
}


module.exports = {
    searchElementsWithinDistance,
    findDistanceBetween
}