import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  subindustry: DS.belongsTo('i-i-s-informacionnaya-sistema-subindustry', { inverse: null, async: false }),
  support: DS.belongsTo('i-i-s-informacionnaya-sistema-support', { inverse: 'listSubindustry', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-list-subindustry.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  subindustry: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-list-subindustry.validations.subindustry.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  support: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-list-subindustry.validations.support.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ListSubindustryE', 'i-i-s-informacionnaya-sistema-list-subindustry', {
    name: attr('Наименование', { index: 0, hidden: true }),
    subindustry: belongsTo('i-i-s-informacionnaya-sistema-subindustry', 'Подотрасль', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });
};
