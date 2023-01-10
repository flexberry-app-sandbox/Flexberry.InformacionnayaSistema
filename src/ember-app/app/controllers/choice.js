import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        transitionToReport(e) {
            e.preventDefault();
            console.log(this.get('resultObject'));
           // this.transitionToRoute('report');
        }
    }
});
