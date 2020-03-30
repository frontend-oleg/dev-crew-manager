import DS from 'ember-data';

export default DS.Model.extend({
    framework: DS.attr('string'),
    developer: DS.belongsTo('developer')
});

