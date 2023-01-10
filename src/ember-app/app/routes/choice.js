import Route from '@ember/routing/route';
import Builder from 'ember-flexberry-data/query/builder';
import RSVP from 'rsvp';


export default Route.extend({
    async model() {


        const store = this.get('store');
        let bulderInvestment = new Builder(store)
            .from('i-i-s-informacionnaya-sistema-investment')
            .selectByProjection('InvestmentL');

        const investments = await store.query('i-i-s-informacionnaya-sistema-investment', bulderInvestment.build());
        const investmentsNames = investments.map((values) => values.get('name'));



        const store1 = this.get('store');
        let bulderSize = new Builder(store1)
            .from('i-i-s-informacionnaya-sistema-size')
            .selectByProjection('SizeL');
    
        const size = await store1.query('i-i-s-informacionnaya-sistema-size', bulderSize.build());
        const sizeNames = size.map((values) => values.get('name'));



        const store2 = this.get('store');
        let bulderSubindustry = new Builder(store2)
            .from('i-i-s-informacionnaya-sistema-subindustry')
            .selectByProjection('SubindustryL');
    
        const subindustry = await store2.query('i-i-s-informacionnaya-sistema-subindustry', bulderSubindustry.build());
        const subindustryNames = subindustry.map((values) => values.get('name'));



        const store3 = this.get('store');
        let bulderComponent = new Builder(store3)
            .from('i-i-s-informacionnaya-sistema-component')
            .selectByProjection('ComponentL');
    
        const component = await store3.query('i-i-s-informacionnaya-sistema-component', bulderComponent.build());
        const componentNames = component.map((values) => values.get('name'));



        const store4 = this.get('store');
        let bulderForm = new Builder(store4)
            .from('i-i-s-informacionnaya-sistema-form')
            .selectByProjection('FormL');
    
        const form = await store4.query('i-i-s-informacionnaya-sistema-form', bulderForm.build());
        const formNames = form.map((values) => values.get('name'));



        const reslutObject = {
            investments: investmentsNames,
            size: sizeNames,
            subindustry: subindustryNames,
            component: componentNames,
            form: formNames
        };

        return reslutObject;

    }
});



