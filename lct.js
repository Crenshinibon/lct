// Generated by CoffeeScript 1.6.3
(function() {
  var _collection;

  if (Meteor.isClient) {
    _collection = new Meteor.Collection(null);
    this.pagecount = function() {
      var e;
      e = _collection.findOne({
        pagecount: {
          $exists: true
        }
      });
      if (e != null) {
        return e.pagecount;
      } else {
        return 0;
      }
    };
    this.pagecount.inc = function() {
      var e;
      e = _collection.findOne({
        pagecount: {
          $exists: true
        }
      });
      if (e != null) {
        console.log(e);
        return _collection.update({
          _id: e._id
        }, {
          $inc: {
            pagecount: 1
          }
        });
      } else {
        return _collection.insert({
          pagecount: 1
        });
      }
    };
  }

}).call(this);