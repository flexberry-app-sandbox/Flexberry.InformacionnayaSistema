import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  description: DS.attr('string'),
  link: DS.attr('string'),
  form: DS.belongsTo('i-i-s-informacionnaya-sistema-form', { inverse: null, async: false }),
  listComponent: DS.hasMany('i-i-s-informacionnaya-sistema-list-component', { inverse: 'support', async: false }),
  listSubindustry: DS.hasMany('i-i-s-informacionnaya-sistema-list-subindustry', { inverse: 'support', async: false }),
  listInvestment: DS.hasMany('i-i-s-informacionnaya-sistema-list-investment', { inverse: 'support', async: false }),
  listSize: DS.hasMany('i-i-s-informacionnaya-sistema-list-size', { inverse: 'support', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-support.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  description: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-support.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  link: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-support.validations.link.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  form: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-support.validations.form.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  listComponent: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-support.validations.listComponent.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  listSubindustry: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-support.validations.listSubindustry.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  listInvestment: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-support.validations.listInvestment.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  listSize: {
    descriptionKey: 'models.i-i-s-informacionnaya-sistema-support.validations.listSize.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SupportE', 'i-i-s-informacionnaya-sistema-support', {
    name: attr('Наименование', { index: 0 }),
    description: attr('Описание', { index: 1 }),
    link: attr('Ссылка на сайт', { index: 2 }),
    form: belongsTo('i-i-s-informacionnaya-sistema-form', 'Форма', {
      name: attr('Name', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'name' }),
    listSize: hasMany('i-i-s-informacionnaya-sistema-list-size', 'Условие 1: Размер компании', {
      name: attr('Наименование', { index: 0, hidden: true }),
      size: belongsTo('i-i-s-informacionnaya-sistema-size', 'Размер компании', {
        name: attr('Name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    }),
    listInvestment: hasMany('i-i-s-informacionnaya-sistema-list-investment', 'Условие 2: Инвестиции', {
      name: attr('Наименование', { index: 0, hidden: true }),
      investment: belongsTo('i-i-s-informacionnaya-sistema-investment', 'Инвестиции', {
        name: attr('Name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    }),
    listSubindustry: hasMany('i-i-s-informacionnaya-sistema-list-subindustry', 'Условие 3: Подотрасль', {
      name: attr('Наименование', { index: 0, hidden: true }),
      subindustry: belongsTo('i-i-s-informacionnaya-sistema-subindustry', 'Подотрасль', {
        name: attr('Name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    }),
    listComponent: hasMany('i-i-s-informacionnaya-sistema-list-component', 'Условие 4: Соц.составляющая', {
      name: attr('Наименование', { index: 0, hidden: true }),
      component: belongsTo('i-i-s-informacionnaya-sistema-component', 'Соц.составляющая', {
        name: attr('Name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('SupportL', 'i-i-s-informacionnaya-sistema-support', {
    name: attr('Наименование', { index: 0 }),
    description: attr('Описание', { index: 1 }),
    link: attr('Ссылка на сайт', { index: 2 }),
    form: belongsTo('i-i-s-informacionnaya-sistema-form', 'Форма', {
      name: attr('Форма', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
