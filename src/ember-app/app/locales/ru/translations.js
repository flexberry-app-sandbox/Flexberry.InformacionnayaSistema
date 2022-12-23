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
          title: 'InformacionnayaSistema'
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
          },
          'choice': {
            caption: 'Подбор мер',
            title: ''
          },
          'report': {
            caption: 'Отчет',
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
