import { A } from '@ember/array';
import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import { action } from '@ember/object';

export default class extends Controller {
    frameworks = A(['React', 'Laravel', 'Vue', 'Ember', 'Angular'])
    selectedFrameworks = []
    roles = ['Full-stack', 'Front-end', 'Back-end']
    role = ''
    name = ''
    lastName = ''

  @action
  submit() {
    let developers;
    const storageDevelopers = window.localStorage.getItem('developers');
    // If there's NO developers ever set. Or value was set, but it's empty
    if (!storageDevelopers || !JSON.parse(storageDevelopers).length) {
        const dev = EmberObject.create({
            id: 1,
            image: 'assets/images/img1.png',
            name: this.name,
            lastName: this.lastName,
            role: this.role,
            frameworks: this.selectedFrameworks
        });
        developers = A([dev]);
        window.localStorage.setItem('developers', JSON.stringify(developers));

    } else {
        // has any developers
        developers = JSON.parse(window.localStorage.getItem('developers'));
        const maxId = Math.max.apply(Math, developers.map(function(dev) { return dev.id; }));
        const imgNumber = Math.floor(Math.random() * 3);
        const image = `assets/images/img${imgNumber + 1}.png`;
        const dev = EmberObject.create({
            id: maxId + 1,
            image: image,
            name: this.name,
            lastName: this.lastName,
            role: this.role,
            frameworks: this.selectedFrameworks
        });
        const developer = A([dev]);
        const newDevelopers = [
            ...developers,
            ...developer
        ];
        window.localStorage.setItem('developers', JSON.stringify(newDevelopers));
    }
    this.set('name', '');
    this.set('lastName', '');
    this.set('role', '');
    this.set('selectedFrameworks', []);
    this.transitionToRoute('index');
    }
}

