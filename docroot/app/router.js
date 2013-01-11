define([
  // Application.
  "app",
  "modules/test"
],

function(app, Test) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
      var layout = new Test.Views.Layout({
        el: "#backbone-bbb-portlet-main"
      });
      layout.setView(".test", new Test.Views.Default());
      layout.render();
    }
  });

  return Router;

});
