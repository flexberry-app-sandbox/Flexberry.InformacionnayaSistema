import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  investment: DS.belongsTo('i-i-s-informacionnaya-sistema-investment', { inverse: null, async: false }),
  support: DS.belongsTo('i-i-s-informacionnaya-sistema-support', { inverse: 'listInvestment', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-list-investment.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  investment: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-list-investment.validations.investment.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  support: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-list-investment.validations.support.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ListInvestmentE', 'i-i-s-informacionnaya-sistema-list-investment', {
    name: attr('Наименование', { index: 0, hidden: true }),
    investment: belongsTo('i-i-s-informacionnaya-sistema-investment', 'Инвестиции', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });
};
