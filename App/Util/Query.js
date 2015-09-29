// var Query = {
//
//   this.getResults = function(){
//     return fetch(this.url, {
//             method: 'GET',
//             headers: {
//               'Accept': 'application/json',
//               'X-Parse-Application-Id': 'wXOdZABhQqjhOZ1rqeRH2NOqU1TgqUHPqYkPjXQr',
//               'X-Parse-REST-API-Key': 'rlCSayxSoBbmHPazttzMdhSYcGBxYMVcmJF4O2uW',
//               'Content-Type': 'application/json',
//             }
//           }).then((res) => res.json());
//   }
// }
var url = 'https://api.parse.com/1/classes/';
var Query = {

  getResults(className:string) {
  //  url = this.url + className;
    return fetch(url.concat(className), {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'X-Parse-Application-Id': 'wXOdZABhQqjhOZ1rqeRH2NOqU1TgqUHPqYkPjXQr',
              'X-Parse-REST-API-Key': 'rlCSayxSoBbmHPazttzMdhSYcGBxYMVcmJF4O2uW',
              'Content-Type': 'application/json',
            }
          }).then((res) => res.json());
  }
}
// Query.prototype.getResults = function(){
//
// }

// Query.getResults = function(){
//   return fetch('https://api.parse.com/1/classes/Post', {
//           method: 'GET',
//           headers: {
//             'Accept': 'application/json',
//             'X-Parse-Application-Id': 'wXOdZABhQqjhOZ1rqeRH2NOqU1TgqUHPqYkPjXQr',
//             'X-Parse-REST-API-Key': 'rlCSayxSoBbmHPazttzMdhSYcGBxYMVcmJF4O2uW',
//             'Content-Type': 'application/json',
//           }
//         }).then((res) => res.json());
// }


// module.exports = Query;
module.exports = Query;
