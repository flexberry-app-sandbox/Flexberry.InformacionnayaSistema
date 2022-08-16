import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-informacionnaya-sistema-list-size', 'Unit | Serializer | i-i-s-informacionnaya-sistema-list-size', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-informacionnaya-sistema-list-size',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
