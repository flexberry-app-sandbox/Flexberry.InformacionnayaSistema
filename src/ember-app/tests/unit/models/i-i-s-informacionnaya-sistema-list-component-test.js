import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-informacionnaya-sistema-list-component', 'Unit | Model | i-i-s-informacionnaya-sistema-list-component', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-informacionnaya-sistema-component',
    'model:i-i-s-informacionnaya-sistema-form',
    'model:i-i-s-informacionnaya-sistema-investment',
    'model:i-i-s-informacionnaya-sistema-list-component',
    'model:i-i-s-informacionnaya-sistema-list-investment',
    'model:i-i-s-informacionnaya-sistema-list-size',
    'model:i-i-s-informacionnaya-sistema-list-subindustry',
    'model:i-i-s-informacionnaya-sistema-size',
    'model:i-i-s-informacionnaya-sistema-subindustry',
    'model:i-i-s-informacionnaya-sistema-support',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
