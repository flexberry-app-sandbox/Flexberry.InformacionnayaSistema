import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISInformacionnayaSistemaComponentLForm from './forms/i-i-s-informacionnaya-sistema-component-l';
import IISInformacionnayaSistemaFormLForm from './forms/i-i-s-informacionnaya-sistema-form-l';
import IISInformacionnayaSistemaInvestmentLForm from './forms/i-i-s-informacionnaya-sistema-investment-l';
import IISInformacionnayaSistemaSizeLForm from './forms/i-i-s-informacionnaya-sistema-size-l';
import IISInformacionnayaSistemaSubindustryLForm from './forms/i-i-s-informacionnaya-sistema-subindustry-l';
import IISInformacionnayaSistemaSupportLForm from './forms/i-i-s-informacionnaya-sistema-support-l';
import IISInformacionnayaSistemaComponentEForm from './forms/i-i-s-informacionnaya-sistema-component-e';
import IISInformacionnayaSistemaFormEForm from './forms/i-i-s-informacionnaya-sistema-form-e';
import IISInformacionnayaSistemaInvestmentEForm from './forms/i-i-s-informacionnaya-sistema-investment-e';
import IISInformacionnayaSistemaSizeEForm from './forms/i-i-s-informacionnaya-sistema-size-e';
import IISInformacionnayaSistemaSubindustryEForm from './forms/i-i-s-informacionnaya-sistema-subindustry-e';
import IISInformacionnayaSistemaSupportEForm from './forms/i-i-s-informacionnaya-sistema-support-e';
import IISInformacionnayaSistemaComponentModel from './models/i-i-s-informacionnaya-sistema-component';
import IISInformacionnayaSistemaFormModel from './models/i-i-s-informacionnaya-sistema-form';
import IISInformacionnayaSistemaInvestmentModel from './models/i-i-s-informacionnaya-sistema-investment';
import IISInformacionnayaSistemaListComponentModel from './models/i-i-s-informacionnaya-sistema-list-component';
import IISInformacionnayaSistemaListInvestmentModel from './models/i-i-s-informacionnaya-sistema-list-investment';
import IISInformacionnayaSistemaListSizeModel from './models/i-i-s-informacionnaya-sistema-list-size';
import IISInformacionnayaSistemaListSubindustryModel from './models/i-i-s-informacionnaya-sistema-list-subindustry';
import IISInformacionnayaSistemaSizeModel from './models/i-i-s-informacionnaya-sistema-size';
import IISInformacionnayaSistemaSubindustryModel from './models/i-i-s-informacionnaya-sistema-subindustry';
import IISInformacionnayaSistemaSupportModel from './models/i-i-s-informacionnaya-sistema-support';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-informacionnaya-sistema-component': IISInformacionnayaSistemaComponentModel,
    'i-i-s-informacionnaya-sistema-form': IISInformacionnayaSistemaFormModel,
    'i-i-s-informacionnaya-sistema-investment': IISInformacionnayaSistemaInvestmentModel,
    'i-i-s-informacionnaya-sistema-list-component': IISInformacionnayaSistemaListComponentModel,
    'i-i-s-informacionnaya-sistema-list-investment': IISInformacionnayaSistemaListInvestmentModel,
    'i-i-s-informacionnaya-sistema-list-size': IISInformacionnayaSistemaListSizeModel,
    'i-i-s-informacionnaya-sistema-list-subindustry': IISInformacionnayaSistemaListSubindustryModel,
    'i-i-s-informacionnaya-sistema-size': IISInformacionnayaSistemaSizeModel,
    'i-i-s-informacionnaya-sistema-subindustry': IISInformacionnayaSistemaSubindustryModel,
    'i-i-s-informacionnaya-sistema-support': IISInformacionnayaSistemaSupportModel
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
    'i-i-s-informacionnaya-sistema-component-l': IISInformacionnayaSistemaComponentLForm,
    'i-i-s-informacionnaya-sistema-form-l': IISInformacionnayaSistemaFormLForm,
    'i-i-s-informacionnaya-sistema-investment-l': IISInformacionnayaSistemaInvestmentLForm,
    'i-i-s-informacionnaya-sistema-size-l': IISInformacionnayaSistemaSizeLForm,
    'i-i-s-informacionnaya-sistema-subindustry-l': IISInformacionnayaSistemaSubindustryLForm,
    'i-i-s-informacionnaya-sistema-support-l': IISInformacionnayaSistemaSupportLForm,
    'i-i-s-informacionnaya-sistema-component-e': IISInformacionnayaSistemaComponentEForm,
    'i-i-s-informacionnaya-sistema-form-e': IISInformacionnayaSistemaFormEForm,
    'i-i-s-informacionnaya-sistema-investment-e': IISInformacionnayaSistemaInvestmentEForm,
    'i-i-s-informacionnaya-sistema-size-e': IISInformacionnayaSistemaSizeEForm,
    'i-i-s-informacionnaya-sistema-subindustry-e': IISInformacionnayaSistemaSubindustryEForm,
    'i-i-s-informacionnaya-sistema-support-e': IISInformacionnayaSistemaSupportEForm
  },

});

export default translations;
