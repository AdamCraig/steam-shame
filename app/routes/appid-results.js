import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
   var url = 'http://localhost:4000/steam/game/' + params.appid;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON[params.appid].data);
     return responseJSON[params.appid].data;
   });
  //  if ("true") {
  //     return "Yes",
  //  },

 },


});
