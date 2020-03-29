import { A } from '@ember/array';
import EmberObject from '@ember/object';
import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        let developers;
        if (!window.localStorage.getItem('developers')) {
            let Nick = EmberObject.create({
                id: 1,
                image: 'assets/images/img1.png',
                name: 'Nick',
                lastName: 'Smet',
                role: 'Full-stack',
                frameworks: ['React', 'Laravel']
            });
            let Wim = EmberObject.create({
                id: 2,
                image: 'assets/images/img2.png',
                name: 'Wim',
                lastName: 'Van Aerschot',
                role: 'Front-end',
                frameworks: ['React', 'Vue']
            });
            let Frederik = EmberObject.create({
                id: 3,
                image: 'assets/images/img3.png',
                name: 'Frederik',
                lastName: 'Humblet',
                role: 'Front-end',
                frameworks: ['React']
            });
            let Elon = EmberObject.create({
                id: 4,
                image: 'assets/images/img1.png',
                name: 'Elon',
                lastName: 'Mudler',
                role: 'Front-end',
                frameworks: ['Ember', 'Angular']
            });
            let Karel = EmberObject.create({
                id: 5,
                image: 'assets/images/img2.png',
                name: 'Karel',
                lastName: 'Eeckelaert',
                role: 'Back-end',
                frameworks: ['Laravel']
            });
            let Andries = EmberObject.create({
                id: 6,
                image: 'assets/images/img3.png',
                name: 'Andries',
                lastName: 'Demeulenaere',
                role: 'Front-end',
                frameworks: ['React']
            });
            let Jessy = EmberObject.create({
                id: 7,
                image: 'assets/images/img1.png',
                name: 'Jessy',
                lastName: 'Cordemans',
                role: 'Front-end',
                frameworks: ['React']
            });
            developers = A([Nick, Wim, Frederik, Elon, Karel, Andries, Jessy]);
            window.localStorage.setItem('developers', JSON.stringify(developers));
        } else {
            developers = JSON.parse(window.localStorage.getItem('developers'));
        }
        return developers;
    },

    setupController(controller, model) {
        controller.set('developers', model)
    }
});


