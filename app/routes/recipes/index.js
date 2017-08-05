import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      recipes:  this.store.query('recipe', {
        sort: "-createdAt",
        page: {
          limit: 30,
        },
        filter: {}
      }),
    });
  },

  setupController(controller, models) {
    controller.set('categories', models.categories);
    controller.set('recipes', models.recipes);
  }
});