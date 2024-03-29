// Test module
define([
  // Application.
  "app"
],

// Map dependencies from above array.
function(app) {

  // Create a new module.
  var Test = app.module();

  // Default Model.
  Test.Model = Backbone.Model.extend({

  });

  // Default Collection.
  Test.Collection = Backbone.Collection.extend({
    model: Test.Model
  });

  // Default View.
  Test.Views.Layout = Backbone.Layout.extend({
    template: "test"
  });
  Test.Views.Default = Backbone.View.extend({
    template: "default"
  });

  // Return the module for AMD compliance.
  return Test;

});
