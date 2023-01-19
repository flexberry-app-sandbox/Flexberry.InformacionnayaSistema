import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        transitionToReport(e) {
            e.preventDefault();
            this.transitionToRoute('report', {
                queryParams: {
                    form: this.get('formValue'),
                    companySize: this.get('companySizeValue'),
                    investments: this.get('investmentsValue'),
                    subindustry: this.get('subindustryValue'),
                    component: this.get('componentValue'),
                }
            });
        }
    },

    resetValues() {
        this.set('formValue', undefined);
        this.set('companySizeValue', undefined);
        this.set('investmentsValue', undefined);
        this.set('subindustryValue', undefined);
        this.set('componentValue', undefined);
    }
});
