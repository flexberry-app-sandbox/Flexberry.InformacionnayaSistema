import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISInformacionnaya_sistemaComponentLForm from './forms/i-i-s-informacionnaya-sistema-component-l';
import IISInformacionnaya_sistemaFormLForm from './forms/i-i-s-informacionnaya-sistema-form-l';
import IISInformacionnaya_sistemaInvestmentLForm from './forms/i-i-s-informacionnaya-sistema-investment-l';
import IISInformacionnaya_sistemaSizeLForm from './forms/i-i-s-informacionnaya-sistema-size-l';
import IISInformacionnaya_sistemaSubindustryLForm from './forms/i-i-s-informacionnaya-sistema-subindustry-l';
import IISInformacionnaya_sistemaSupportLForm from './forms/i-i-s-informacionnaya-sistema-support-l';
import IISInformacionnaya_sistemaComponentEForm from './forms/i-i-s-informacionnaya-sistema-component-e';
import IISInformacionnaya_sistemaFormEForm from './forms/i-i-s-informacionnaya-sistema-form-e';
import IISInformacionnaya_sistemaInvestmentEForm from './forms/i-i-s-informacionnaya-sistema-investment-e';
import IISInformacionnaya_sistemaSizeEForm from './forms/i-i-s-informacionnaya-sistema-size-e';
import IISInformacionnaya_sistemaSubindustryEForm from './forms/i-i-s-informacionnaya-sistema-subindustry-e';
import IISInformacionnaya_sistemaSupportEForm from './forms/i-i-s-informacionnaya-sistema-support-e';
import IISInformacionnaya_sistemaComponentModel from './models/i-i-s-informacionnaya-sistema-component';
import IISInformacionnaya_sistemaFormModel from './models/i-i-s-informacionnaya-sistema-form';
import IISInformacionnaya_sistemaInvestmentModel from './models/i-i-s-informacionnaya-sistema-investment';
import IISInformacionnaya_sistemaListComponentModel from './models/i-i-s-informacionnaya-sistema-list-component';
import IISInformacionnaya_sistemaListInvestmentModel from './models/i-i-s-informacionnaya-sistema-list-investment';
import IISInformacionnaya_sistemaListSizeModel from './models/i-i-s-informacionnaya-sistema-list-size';
import IISInformacionnaya_sistemaListSubindustryModel from './models/i-i-s-informacionnaya-sistema-list-subindustry';
import IISInformacionnaya_sistemaSizeModel from './models/i-i-s-informacionnaya-sistema-size';
import IISInformacionnaya_sistemaSubindustryModel from './models/i-i-s-informacionnaya-sistema-subindustry';
import IISInformacionnaya_sistemaSupportModel from './models/i-i-s-informacionnaya-sistema-support';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-informacionnaya-sistema-component': IISInformacionnaya_sistemaComponentModel,
    'i-i-s-informacionnaya-sistema-form': IISInformacionnaya_sistemaFormModel,
    'i-i-s-informacionnaya-sistema-investment': IISInformacionnaya_sistemaInvestmentModel,
    'i-i-s-informacionnaya-sistema-list-component': IISInformacionnaya_sistemaListComponentModel,
    'i-i-s-informacionnaya-sistema-list-investment': IISInformacionnaya_sistemaListInvestmentModel,
    'i-i-s-informacionnaya-sistema-list-size': IISInformacionnaya_sistemaListSizeModel,
    'i-i-s-informacionnaya-sistema-list-subindustry': IISInformacionnaya_sistemaListSubindustryModel,
    'i-i-s-informacionnaya-sistema-size': IISInformacionnaya_sistemaSizeModel,
    'i-i-s-informacionnaya-sistema-subindustry': IISInformacionnaya_sistemaSubindustryModel,
    'i-i-s-informacionnaya-sistema-support': IISInformacionnaya_sistemaSupportModel
  },

  'application-name': 'Информационно-консультационная система',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Информационно-консультационная система',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Информационно-консультационная система',
          title: 'Информационно-консультационная система'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'информационно-консультационная-система': {
          caption: 'Информационно-консультационная система',
          title: 'Информационно-консультационная система',
          'i-i-s-informacionnaya-sistema-support-l': {
            caption: 'Мера поддержки',
            title: ''
          },
          'i-i-s-informacionnaya-sistema-form-l': {
            caption: 'Форма',
            title: ''
          },
          'i-i-s-informacionnaya-sistema-size-l': {
            caption: 'Размер компании',
            title: ''
          },
          'i-i-s-informacionnaya-sistema-subindustry-l': {
            caption: 'Подотрасль',
            title: ''
          },
          'i-i-s-informacionnaya-sistema-investment-l': {
            caption: 'Инвестиции',
            title: ''
          },
          'i-i-s-informacionnaya-sistema-component-l': {
            caption: 'Соц.составляющая',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-informacionnaya-sistema-component-l': IISInformacionnaya_sistemaComponentLForm,
    'i-i-s-informacionnaya-sistema-form-l': IISInformacionnaya_sistemaFormLForm,
    'i-i-s-informacionnaya-sistema-investment-l': IISInformacionnaya_sistemaInvestmentLForm,
    'i-i-s-informacionnaya-sistema-size-l': IISInformacionnaya_sistemaSizeLForm,
    'i-i-s-informacionnaya-sistema-subindustry-l': IISInformacionnaya_sistemaSubindustryLForm,
    'i-i-s-informacionnaya-sistema-support-l': IISInformacionnaya_sistemaSupportLForm,
    'i-i-s-informacionnaya-sistema-component-e': IISInformacionnaya_sistemaComponentEForm,
    'i-i-s-informacionnaya-sistema-form-e': IISInformacionnaya_sistemaFormEForm,
    'i-i-s-informacionnaya-sistema-investment-e': IISInformacionnaya_sistemaInvestmentEForm,
    'i-i-s-informacionnaya-sistema-size-e': IISInformacionnaya_sistemaSizeEForm,
    'i-i-s-informacionnaya-sistema-subindustry-e': IISInformacionnaya_sistemaSubindustryEForm,
    'i-i-s-informacionnaya-sistema-support-e': IISInformacionnaya_sistemaSupportEForm
  },

});

export default translations;
