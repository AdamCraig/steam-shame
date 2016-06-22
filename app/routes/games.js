import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // var appid;
    return Ember.$.getJSON('http://localhost:4000/steam/games').then(function(response){
      var list = response.applist.apps.app;
      console.log(list);
      var findAppIDFromTitle = function(title){
        list.forEach(function(item) {
          if (item.name === title) {
            console.log("I FOUND IT!" + item.appid);

          }
          // this is an alternative to find sub-title
          // if (item.name.split(':')[1].trim() === title) appid =  item.appid;
        })
      };
      findAppIDFromTitle('Team Fortress 2');

    });
  },
});
