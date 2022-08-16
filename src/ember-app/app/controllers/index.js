import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.информационно-консультационная-система.caption'),
          title: i18n.t('forms.application.sitemap.информационно-консультационная-система.title'),
          children: [{
            link: 'i-i-s-informacionnaya-sistema-support-l',
            caption: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnaya-sistema-support-l.caption'),
            title: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnaya-sistema-support-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-informacionnaya-sistema-form-l',
            caption: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnaya-sistema-form-l.caption'),
            title: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnaya-sistema-form-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-informacionnaya-sistema-size-l',
            caption: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnaya-sistema-size-l.caption'),
            title: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnaya-sistema-size-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-informacionnaya-sistema-subindustry-l',
            caption: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnaya-sistema-subindustry-l.caption'),
            title: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnaya-sistema-subindustry-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-informacionnaya-sistema-investment-l',
            caption: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnaya-sistema-investment-l.caption'),
            title: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnaya-sistema-investment-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-informacionnaya-sistema-component-l',
            caption: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnaya-sistema-component-l.caption'),
            title: i18n.t('forms.application.sitemap.информационно-консультационная-система.i-i-s-informacionnaya-sistema-component-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})