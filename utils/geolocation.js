const GeoLocation = (() => {

    const privateWeakMap = new WeakMap();

    class GeolocationClass {
        constructor(location = null){
            if(location !== null){
                this.location = location
            }

            privateWeakMap.set(this, {
                Deg2Rad(deg){
                    return deg * Math.PI / 180;
                },
                PythagorasEquirectangular( lat1, lon1, lat2, lon2 ) {
                    lat1 = this.Deg2Rad(lat1);
                    lat2 = this.Deg2Rad(lat2);
                    lon1 = this.Deg2Rad(lon1);
                    lon2 = this.Deg2Rad(lon2);
                    var R = 6371; // km
                    var x = (lon2-lon1) * Math.cos((lat1+lat2)/2);
                    var y = (lat2-lat1);
                    var d = Math.sqrt(x*x + y*y) * R;
                    return d;
                  }
            })
        }
        set setLocations(locations){
            this.location = locations;
        }

        static nearestLocation(latitude, longitude, locations) {
            var mindif=99999;
            var closest;
          
            for (let index = 0; index < locations.length; ++index) {
              var dif =  privateWeakMap.get(this).PythagorasEquirectangular(latitude, longitude, locations[ index ][ 'latitude' ], locations[ index ][ 'longitude' ]);
              if ( dif < mindif ) {
                closest=index;
                mindif = dif;
              }
            }
          
            // return the nearest location
            var closestLocation = (locations[ closest ]);
            return closestLocation;
          }
    }
    
    return GeolocationClass
})()

// Convert Degress to Radians
function Deg2Rad( deg ) {
    return deg * Math.PI / 180;
  }
  
  function PythagorasEquirectangular( lat1, lon1, lat2, lon2 ) {
    lat1 = Deg2Rad(lat1);
    lat2 = Deg2Rad(lat2);
    lon1 = Deg2Rad(lon1);
    lon2 = Deg2Rad(lon2);
    var R = 6371; // km
    var x = (lon2-lon1) * Math.cos((lat1+lat2)/2);
    var y = (lat2-lat1);
    var d = Math.sqrt(x*x + y*y) * R;
    return d;
  }
  
  function NearestLocation(latitude, longitude, locations) {
    let mindif=99999;
    let closest;
    for (index = 0; index < locations.length; ++index) {
      var dif =  PythagorasEquirectangular(latitude, longitude, locations[ index ][ 'latitude' ], locations[ index ]['longitude']);
      if ( dif < mindif ) {
        closest=index;
        mindif = dif;
      }
    }
  
    // return the nearest location
    var closestLocation = (locations[ closest ]);
    return closestLocation;
  }

  module.exports = NearestLocation;


