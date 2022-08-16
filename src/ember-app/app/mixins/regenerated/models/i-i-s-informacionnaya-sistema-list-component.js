import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  component: DS.belongsTo('i-i-s-informacionnaya-sistema-component', { inverse: null, async: false }),
  support: DS.belongsTo('i-i-s-informacionnaya-sistema-support', { inverse: 'listComponent', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-list-component.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  component: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-list-component.validations.component.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  support: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-list-component.validations.support.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ListComponentE', 'i-i-s-informacionnaya-sistema-list-component', {
    name: attr('Наименование', { index: 0, hidden: true }),
    component: belongsTo('i-i-s-informacionnaya-sistema-component', 'Соц.составляющая', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });
};
