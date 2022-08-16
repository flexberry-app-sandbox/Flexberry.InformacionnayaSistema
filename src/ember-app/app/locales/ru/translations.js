import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Информационно-консультационная система',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Информационно-консультационная система',
          title: 'Informacionnaya_sistema'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
