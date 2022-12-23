import Route from '@ember/routing/route';
import Builder from 'ember-flexberry-data/query/builder';
import RSVP from 'rsvp';

export default Route.extend({
    async model() {
        const store = this.get('store');
        let bulderInvestment = new Bulder(store)
            .from('i-i-s-informacionnaya-sistema-investment')
            .selectByProjection('InvestmentL');

        const investments = await store.query('i-i-s-informacionnaya-sistema-investment', bulderInvestment.build());
        investmentsNames = investments.map((values) => values.get('name'));

        const reslutObject = {
            investments: investmentsNames,
        };

        return reslutObject;
    }
});
