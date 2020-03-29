import Controller from '@ember/controller';

export default Controller.extend({
    role: "All roles",
    selectedFramework: "All frameworks",

    actions: {
        filterByRole(selected) {
            this.set('role', selected)
        },
        filterByFramework(selected) {
            this.set('selectedFramework', selected)
        },
        fire(dev) {
            const text = `Fire developer ${dev.name} ${dev.lastName} ?`;
            if(confirm(text)) {
                const newDevelopers = this.get('developers').filter(item => item.id !== dev.id);
                this.set('developers', newDevelopers);
                window.localStorage.setItem('developers', JSON.stringify(newDevelopers));
            }

        }
    }
})
