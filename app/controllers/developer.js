import { A } from '@ember/array';
import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import { action } from '@ember/object';

export default class DeveloperController extends Controller {
    frameworks = A(['React', 'Laravel', 'Vue', 'Ember', 'Angular'])
    roles = ['Full-stack', 'Front-end', 'Back-end']

    @action
    save() {
        if (window.localStorage.getItem('developers') && (JSON.parse(window.localStorage.getItem('developers')) && JSON.parse(window.localStorage.getItem('developers')).length)) {
            const developers = JSON.parse(window.localStorage.getItem('developers'));
            const index = developers.findIndex(item => item.id === this.developer.id);
            const editedDeveloper = developers[index];
            const dev = EmberObject.create({
                id: editedDeveloper.id,
                image: editedDeveloper.image,
                name: this.developer.name,
                lastName: this.developer.lastName,
                role: this.developer.role,
                frameworks: this.developer.frameworks
            });
            const developer = A([dev]);
            const newDevelopers = [
                ...developers.slice(0, index),
                ...developer,
                ...developers.slice(index + 1)
            ];
            window.localStorage.setItem('developers', JSON.stringify(newDevelopers));
            this.transitionToRoute('index');
        }
    }

    @action
    fire(developer) {
        const text = `Fire developer ${developer.name} ${developer.lastName} ?`;
        if(confirm(text)) {
            if (window.localStorage.getItem('developers') && (JSON.parse(window.localStorage.getItem('developers')) && JSON.parse(window.localStorage.getItem('developers')).length)) {
                const developers = JSON.parse(window.localStorage.getItem('developers'));
                const newDevelopers = developers.filter(item => item.id !== developer.id);
                window.localStorage.setItem('developers', JSON.stringify(newDevelopers));
                this.transitionToRoute('index');
            }
        }
    }
}
