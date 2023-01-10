//import Builder from 'ember-flexberry-data/query/builder';
import ListFormRoute from 'ember-flexberry/routes/list-form';
import { computed } from '@ember/object';

export default ListFormRoute.extend({
    modelProjection: 'SupportL',
    modelName: 'i-i-s-informacionnaya-sistema-support',

    developerUserSettings: computed(function() {
        return { ReportL: {} }
    }),
    


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
