import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  size: DS.belongsTo('i-i-s-informacionnaya-sistema-size', { inverse: null, async: false }),
  support: DS.belongsTo('i-i-s-informacionnaya-sistema-support', { inverse: 'listSize', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-list-size.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  size: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-list-size.validations.size.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  support: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-list-size.validations.support.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ListSizeE', 'i-i-s-informacionnaya-sistema-list-size', {
    name: attr('Наименование', { index: 0, hidden: true }),
    size: belongsTo('i-i-s-informacionnaya-sistema-size', 'Размер компании', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });
};
