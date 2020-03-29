import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        if (window.localStorage.getItem('developers')) {
            const developers = JSON.parse(window.localStorage.getItem('developers'));
            const developer = developers.find(dev => dev.id === +params.id)
            return developer;
        }
        return {};
    },
    setupController(controller, model) {
        controller.set('developer', model)
    }
})