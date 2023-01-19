//import Builder from 'ember-flexberry-data/query/builder';
import ListFormRoute from 'ember-flexberry/routes/list-form';
import { computed } from '@ember/object';
import { SimplePredicate, DetailPredicate } from 'ember-flexberry-data/query/predicate';
import FilterOperator from 'ember-flexberry-data/query/filter-operator';

export default ListFormRoute.extend({
    modelProjection: 'SupportE',
    modelName: 'i-i-s-informacionnaya-sistema-support',

    developerUserSettings: computed(function() {
        return { ReportL: {} }
    }),

    model({form, companySize, investments, subindustry, component}) {
        this.set('formValue', form);
        this.set('companySizeValue', companySize);
        this.set('investmentsValue', investments);
        this.set('subindustryValue', subindustry);
        this.set('componentValue', component);
        this._super(...arguments);
    },

    objectListViewLimitPredicate(options) {
        if (options.modelName === 'i-i-s-informacionnaya-sistema-support') {
            const formValue = this.get('formValue');
            const companySizeValue = this.get('companySizeValue');
            const investmentsValue = this.get('investmentsValue');
            const subindustryValue = this.get('subindustryValue');
            const componentValue = this.get('componentValue');
            const firestPredicateResult = this.getFirstPredicate(formValue, companySizeValue, investmentsValue, subindustryValue, componentValue);
            if (firestPredicateResult !== null) {
                let resultPredicate = firestPredicateResult.predicate;

                if (formValue && firestPredicateResult.predicateFor !== 'formValue') {
                    const formPredicate = new SimplePredicate('form.name', FilterOperator.Eq, formValue);
                    resultPredicate = resultPredicate.and(formPredicate);
                }

                if (companySizeValue && firestPredicateResult.predicateFor !== 'companySizeValue') {
                    const companyPredicate = new DetailPredicate('listSize').any('size.name', FilterOperator.Eq, companySizeValue);
                    resultPredicate = resultPredicate.and(companyPredicate);
                }

                if (investmentsValue && firestPredicateResult.predicateFor !== 'investmentsValue') {
                    const investmentsPredicate = new DetailPredicate('listInvestment').any('investment.name', FilterOperator.Eq, investmentsValue);
                    resultPredicate = resultPredicate.and(investmentsPredicate);
                }

                if (subindustryValue && firestPredicateResult.predicateFor !== 'subindustryValue') {
                    const subindustryPredicate = new DetailPredicate('listSubindustry').any('subindustry.name', FilterOperator.Eq, subindustryValue);
                    resultPredicate = resultPredicate.and(subindustryPredicate);
                }

                if (componentValue && firestPredicateResult.predicateFor !== 'componentValue') {
                    const componentPredicate = new DetailPredicate('listComponent').any('component.name', FilterOperator.Eq, componentValue);
                    resultPredicate = resultPredicate.and(componentPredicate);
                }

                return resultPredicate;
            }
        }
    },

    getFirstPredicate(formValue, companySizeValue, investmentsValue, subindustryValue, componentValue) {
        if (formValue) {
            return {
                predicateFor: 'formValue',
                predicate: new SimplePredicate('form.name', FilterOperator.Eq, formValue)
            };
        }

        if (companySizeValue) {
            return {
                predicateFor: 'companySizeValue',
                predicate: new DetailPredicate('listSize').any('size.name', FilterOperator.Eq, companySizeValue)
            };
        }

        if (investmentsValue) {
            return {
                predicateFor: 'investmentsValue',
                predicate: new DetailPredicate('listInvestment').any('investment.name', FilterOperator.Eq, investmentsValue)
            };
        }

        if (subindustryValue) {
            return {
                predicateFor: 'subindustryValue',
                predicate: new DetailPredicate('listSubindustry').any('subindustry.name', FilterOperator.Eq, subindustryValue)
            };
        }

        if (componentValue) {
            return {
                predicateFor: 'componentValue',
                predicate: new DetailPredicate('listComponent').any('component.name', FilterOperator.Eq, componentValue)
            };
        }

        return null;
    }
    


    // async model() {

    //     const store = this.get('store');
    //     let bulderSupport = new Builder(store)
    //         .from('i-i-s-informacionnaya-sistema-support')
    //         .selectByProjection('SupportL');

    //     const support = await store.query('i-i-s-informacionnaya-sistema-support', bulderSupport.build());
    //     const supportNames = support.map((values) => values.get('name'));


    //     const reslutObject = {
    //         support: supportNames,
    //     };

    //     return reslutObject;
    // }

});
