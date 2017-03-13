'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {<% if (filters.mongoose) { %>

  // MongoDB connection options
  mongo: {
    uri: `mongodb://${process.env.MONGODB_DOCKER_SERVICE || 'localhost'}/<%= lodash.slugify(appname) %>-dev`
  },<% } if (filters.sequelize) { %>

  // Sequelize connection opions
  sequelize: {
    uri: 'sqlite://',
    options: {
      logging: false,
      storage: 'dev.sqlite',
      define: {
        timestamps: false
      }
    }
  },<% } %>

  // Seed database on startup
  seedDB: true

};
