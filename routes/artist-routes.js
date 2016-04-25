const Artist = require(__dirname + '/../models/artists');

module.exports = [
  {
    method: 'GET',
    path: '/api/artists',
    handler: (request, reply) => {
      Artist.find(null, (err, data) => {
        if (err) return reply(err);

        return reply(data);
      });
    }
  },

  {
    method: 'POST',
    path: '/api/artists',
    handler: (request, reply) => {
      var artistData = request.payload;
      var newArtist = new Artist(artistData);

      newArtist.save((err, data) => {
        if (err) return reply(err);

        return reply(data);
      });
    }
  },

  {
    method: 'PUT',
    path: '/api/artists/{id}',
    handler: (request, reply) => {
      var artistData = request.payload;
      delete artistData._id;

      Artist.update({ _id: request.params.id }, artistData, (err, data) => {
        if (err) return reply(err);

        return reply(data);
      });
    }
  },

  {
    method: 'DELETE',
    path: '/api/artists/{id}',
    handler: (request, reply) => {
      Artist.findOneAndRemove({ _id: request.params.id }, (err, data) => {
        if (err) return reply(err);

        return reply(data);
      });
    }
  }
];
