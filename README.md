# geographic-item-search
A npm module that searches for item within a given distance from a reference point( latitude, longitude ).

## Getting Started

Install
```
npm install geographic-item-search
```

## Package Summary

**findDistanceBetween( lat1, long1, lat2, long2, R ) :** Calculates the distance between two points given their latitude and longitudes **( lat1, long1, lat2, long2 )** in radians and an optional Earth's radius **( R )** parameter which defaults to 6371 Kms.


**searchElementsWithinDistance( data, lat, long, maxDist, R ) :** Iterates over an array of objects **(data)** that must have
latitude and longitude in radians as **radianLatitude, radianLongitude** properties. Finds the distance of each object from reference point's latitude and longitude **( lat, long )**. Finally, if the distance calculated is under **maxDist** the object
is added to result array.

## Setup

```
const { searchElementsWithinDistance } = require('geographic-item-search');
let searchResult = searchElementsWithinDistance( sortedEntitiessData, latitude, longitude, distanceToSearch, EARTH_RADIUS );
```



**This package is published on [npm](https://www.npmjs.com/package/geographic-item-search)**
