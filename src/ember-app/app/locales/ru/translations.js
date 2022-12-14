import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': '??????????????????????????-???????????????????????????????? ??????????????',

  forms: {
    loading: {
      'spinner-caption': '???????????? ??????????????????????, ???????????????????? ??????????????????...'
    },
    index: {
      greeting: '?????????? ???????????????????? ???? ???????????????? ?????????? ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: '????????'
          },
          'user-settings-service-checkbox': {
            caption: '???????????????????????? ???????????? ???????????????????? ???????????????????????????????? ????????????????'
          },
          'show-menu': {
            caption: '???????????????? ????????'
          },
          'hide-menu': {
            caption: '???????????? ????????'
          },
          'language-dropdown': {
            caption: '???????? ????????????????????',
            placeholder: '???????????????? ????????'
          }
        },
        login: {
          caption: '????????'
        },
        logout: {
          caption: '??????????'
        }
      },

      footer: {
        'application-name': '??????????????????????????-???????????????????????????????? ??????????????',
        'application-version': {
          caption: '???????????? ???????????? {{version}}',
          title: '?????? ???????????? ???????????? ember-flexberry, ?????????????? ???????????? ???????????????????????? ?? ???????? ???????????????? ???????????????????? ' +
          '(???????????? npm-???????????? + ?????? ??????????????). ' +
          '????????????????, ?????????? ?????????????? ???? GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '??????????????????????????-???????????????????????????????? ??????????????',
          title: 'InformacionnayaSistema'
        },
        'application-version': {
          caption: '???????????? ???????????? {{version}}',
          title: '?????? ???????????? ???????????? ember-flexberry, ?????????????? ???????????? ???????????????????????? ?? ???????? ???????????????? ???????????????????? ' +
          '(???????????? npm-???????????? + ?????? ??????????????). ' +
          '????????????????, ?????????? ?????????????? ???? GitHub.'
        },
        index: {
          caption: '??????????????',
          title: ''
        },
        '??????????????????????????-????????????????????????????????-??????????????': {
          caption: '??????????????????????????-???????????????????????????????? ??????????????',
          title: '??????????????????????????-???????????????????????????????? ??????????????',
          'i-i-s-informacionnaya-sistema-support-l': {
            caption: '???????? ??????????????????',
            title: ''
          },
          'i-i-s-informacionnaya-sistema-form-l': {
            caption: '??????????',
            title: ''
          },
          'i-i-s-informacionnaya-sistema-size-l': {
            caption: '???????????? ????????????????',
            title: ''
          },
          'i-i-s-informacionnaya-sistema-subindustry-l': {
            caption: '????????????????????',
            title: ''
          },
          'i-i-s-informacionnaya-sistema-investment-l': {
            caption: '????????????????????',
            title: ''
          },
          'i-i-s-informacionnaya-sistema-component-l': {
            caption: '??????.????????????????????????',
            title: ''
          },
          'choice': {
            caption: '???????????? ??????',
            title: ''
          },
          'report': {
            caption: '??????????',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': '???????????????????? ?????????????????????? ??????????????',
      'save-success-message': '???????????? ????????????????',
      'save-error-message-caption': '???????????? ????????????????????',
      'delete-success-message-caption': '???????????????? ?????????????????????? ??????????????',
      'delete-success-message': '???????????? ????????????',
      'delete-error-message-caption': '???????????? ????????????????'
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
