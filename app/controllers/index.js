import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class extends Controller {
    role = 'All roles'
    roles = ['All roles', 'Full-stack', 'Front-end', 'Back-end']
    selectedFramework = 'All frameworks'
    frameworks = ['All frameworks', 'React', 'Laravel', 'Vue', 'Ember', 'Angular']
    
    @action
    filterByRole(selected) {
        this.set('role', selected)
    }

    @action
    filterByFramework(selected) {
        this.set('selectedFramework', selected)
    }

    @action
    fire(dev) {
        const text = `Fire developer ${dev.name} ${dev.lastName} ?`;
        if(confirm(text)) {
            const newDevelopers = this.get('developers').filter(item => item.id !== dev.id);
            this.set('developers', newDevelopers);
            window.localStorage.setItem('developers', JSON.stringify(newDevelopers));
        }
    }
}
