import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-informacionnaya-sistema-component-l');
  this.route('i-i-s-informacionnaya-sistema-component-e',
  { path: 'i-i-s-informacionnaya-sistema-component-e/:id' });
  this.route('i-i-s-informacionnaya-sistema-component-e.new',
  { path: 'i-i-s-informacionnaya-sistema-component-e/new' });
  this.route('i-i-s-informacionnaya-sistema-form-l');
  this.route('i-i-s-informacionnaya-sistema-form-e',
  { path: 'i-i-s-informacionnaya-sistema-form-e/:id' });
  this.route('i-i-s-informacionnaya-sistema-form-e.new',
  { path: 'i-i-s-informacionnaya-sistema-form-e/new' });
  this.route('i-i-s-informacionnaya-sistema-investment-l');
  this.route('i-i-s-informacionnaya-sistema-investment-e',
  { path: 'i-i-s-informacionnaya-sistema-investment-e/:id' });
  this.route('i-i-s-informacionnaya-sistema-investment-e.new',
  { path: 'i-i-s-informacionnaya-sistema-investment-e/new' });
  this.route('i-i-s-informacionnaya-sistema-size-l');
  this.route('i-i-s-informacionnaya-sistema-size-e',
  { path: 'i-i-s-informacionnaya-sistema-size-e/:id' });
  this.route('i-i-s-informacionnaya-sistema-size-e.new',
  { path: 'i-i-s-informacionnaya-sistema-size-e/new' });
  this.route('i-i-s-informacionnaya-sistema-subindustry-l');
  this.route('i-i-s-informacionnaya-sistema-subindustry-e',
  { path: 'i-i-s-informacionnaya-sistema-subindustry-e/:id' });
  this.route('i-i-s-informacionnaya-sistema-subindustry-e.new',
  { path: 'i-i-s-informacionnaya-sistema-subindustry-e/new' });
  this.route('i-i-s-informacionnaya-sistema-support-l');
  this.route('i-i-s-informacionnaya-sistema-support-e',
  { path: 'i-i-s-informacionnaya-sistema-support-e/:id' });
  this.route('i-i-s-informacionnaya-sistema-support-e.new',
  { path: 'i-i-s-informacionnaya-sistema-support-e/new' });
});

export default Router;
