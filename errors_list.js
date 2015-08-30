Template.meteorError.helpers({
  errors: function() {
    return Errors.collection.find();
  }
});

Template.meteorError.onRendered({
  var error = this.data;
  Meteor.setTimeout(function () {
    Errors.collection.remove(error._id);
  }, 3000);
});
