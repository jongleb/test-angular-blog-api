'use strict';

module.exports = function(Search) {

  /**
   * search data in common models
   * @param {string} query
   * @param {Function(Error, any)} callback
   */

  Search.search = (query, callback) => {
    const root = {a: 'b'};
    callback(null, root);
  };

};
