// This is a module for cloud persistance in mongolab - https://mongolab.com
angular.module('mongolab', ['ngResource']).
    factory('Project', function($resource) {
      var Project = $resource('https://api.mongolab.com/api/1/databases' +
          '/angularjs/collections/items/:id',
          { apiKey: '4f8581c0e4b08a2eed5f3cc0' }, {
            update: { method: 'PUT' }
          }
      );

      Project.prototype.update = function(cb) {
        return Project.update({id: this._id.$oid},
            angular.extend({}, this, {_id:undefined}), cb);
      };

      Project.prototype.destroy = function(cb) {
        return Project.remove({id: this._id.$oid}, cb);
      };

      return Project;
    });