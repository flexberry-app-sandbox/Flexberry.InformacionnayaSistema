'use strict';

define('ember-app/tests/acceptance/flexberry/i-i-s-informacionnaya-sistema-component-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s informacionnaya sistema component l');

  (0, _qunit.test)('testing i-i-s-informacionnaya-sistema-component-l', function (assert) {
    var _this = this;

    visit('/i-i-s-informacionnaya-sistema-component-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-informacionnaya-sistema-form-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s informacionnaya sistema form l');

  (0, _qunit.test)('testing i-i-s-informacionnaya-sistema-form-l', function (assert) {
    var _this = this;

    visit('/i-i-s-informacionnaya-sistema-form-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-informacionnaya-sistema-investment-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s informacionnaya sistema investment l');

  (0, _qunit.test)('testing i-i-s-informacionnaya-sistema-investment-l', function (assert) {
    var _this = this;

    visit('/i-i-s-informacionnaya-sistema-investment-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-informacionnaya-sistema-size-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s informacionnaya sistema size l');

  (0, _qunit.test)('testing i-i-s-informacionnaya-sistema-size-l', function (assert) {
    var _this = this;

    visit('/i-i-s-informacionnaya-sistema-size-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-informacionnaya-sistema-subindustry-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s informacionnaya sistema subindustry l');

  (0, _qunit.test)('testing i-i-s-informacionnaya-sistema-subindustry-l', function (assert) {
    var _this = this;

    visit('/i-i-s-informacionnaya-sistema-subindustry-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-informacionnaya-sistema-support-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s informacionnaya sistema support l');

  (0, _qunit.test)('testing i-i-s-informacionnaya-sistema-support-l', function (assert) {
    var _this = this;

    visit('/i-i-s-informacionnaya-sistema-support-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-informacionnaya-sistema-component-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-informacionnaya-sistema-component-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-informacionnaya-sistema-component-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-informacionnaya-sistema-component-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-informacionnaya-sistema-component-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-informacionnaya-sistema-component-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-informacionnaya-sistema-form-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-informacionnaya-sistema-form-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-informacionnaya-sistema-form-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-informacionnaya-sistema-form-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-informacionnaya-sistema-form-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-informacionnaya-sistema-form-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-informacionnaya-sistema-investment-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-informacionnaya-sistema-investment-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-informacionnaya-sistema-investment-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-informacionnaya-sistema-investment-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-informacionnaya-sistema-investment-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-informacionnaya-sistema-investment-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-informacionnaya-sistema-size-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-informacionnaya-sistema-size-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-informacionnaya-sistema-size-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-informacionnaya-sistema-size-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-informacionnaya-sistema-size-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-informacionnaya-sistema-size-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-informacionnaya-sistema-subindustry-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-informacionnaya-sistema-subindustry-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-informacionnaya-sistema-subindustry-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-informacionnaya-sistema-subindustry-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-informacionnaya-sistema-subindustry-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-informacionnaya-sistema-subindustry-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-informacionnaya-sistema-support-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-informacionnaya-sistema-support-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-informacionnaya-sistema-support-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-informacionnaya-sistema-support-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-informacionnaya-sistema-support-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-informacionnaya-sistema-support-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-informacionnaya-sistema-component-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-informacionnaya-sistema-component-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-informacionnaya-sistema-component-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-informacionnaya-sistema-component-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-informacionnaya-sistema-form-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-informacionnaya-sistema-form-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-informacionnaya-sistema-form-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-informacionnaya-sistema-form-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-informacionnaya-sistema-investment-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-informacionnaya-sistema-investment-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-informacionnaya-sistema-investment-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-informacionnaya-sistema-investment-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-informacionnaya-sistema-size-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-informacionnaya-sistema-size-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-informacionnaya-sistema-size-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-informacionnaya-sistema-size-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-informacionnaya-sistema-subindustry-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-informacionnaya-sistema-subindustry-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-informacionnaya-sistema-subindustry-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-informacionnaya-sistema-subindustry-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-informacionnaya-sistema-support-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-informacionnaya-sistema-support-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-informacionnaya-sistema-support-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-informacionnaya-sistema-support-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-informacionnaya-sistema-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-informacionnaya-sistema-component.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-informacionnaya-sistema-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-informacionnaya-sistema-form.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-informacionnaya-sistema-investment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-informacionnaya-sistema-investment.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-informacionnaya-sistema-list-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-informacionnaya-sistema-list-component.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-informacionnaya-sistema-list-investment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-informacionnaya-sistema-list-investment.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-informacionnaya-sistema-list-size.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-informacionnaya-sistema-list-size.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-informacionnaya-sistema-list-subindustry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-informacionnaya-sistema-list-subindustry.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-informacionnaya-sistema-size.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-informacionnaya-sistema-size.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-informacionnaya-sistema-subindustry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-informacionnaya-sistema-subindustry.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-informacionnaya-sistema-support.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-informacionnaya-sistema-support.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-informacionnaya-sistema-component-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-informacionnaya-sistema-component-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-informacionnaya-sistema-component-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-informacionnaya-sistema-component-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-informacionnaya-sistema-form-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-informacionnaya-sistema-form-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-informacionnaya-sistema-form-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-informacionnaya-sistema-form-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-informacionnaya-sistema-investment-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-informacionnaya-sistema-investment-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-informacionnaya-sistema-investment-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-informacionnaya-sistema-investment-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-informacionnaya-sistema-size-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-informacionnaya-sistema-size-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-informacionnaya-sistema-size-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-informacionnaya-sistema-size-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-informacionnaya-sistema-subindustry-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-informacionnaya-sistema-subindustry-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-informacionnaya-sistema-subindustry-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-informacionnaya-sistema-subindustry-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-informacionnaya-sistema-support-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-informacionnaya-sistema-support-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-informacionnaya-sistema-support-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-informacionnaya-sistema-support-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-informacionnaya-sistema-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-informacionnaya-sistema-component.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-informacionnaya-sistema-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-informacionnaya-sistema-form.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-informacionnaya-sistema-investment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-informacionnaya-sistema-investment.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-informacionnaya-sistema-list-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-informacionnaya-sistema-list-component.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-informacionnaya-sistema-list-investment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-informacionnaya-sistema-list-investment.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-informacionnaya-sistema-list-size.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-informacionnaya-sistema-list-size.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-informacionnaya-sistema-list-subindustry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-informacionnaya-sistema-list-subindustry.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-informacionnaya-sistema-size.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-informacionnaya-sistema-size.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-informacionnaya-sistema-subindustry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-informacionnaya-sistema-subindustry.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-informacionnaya-sistema-support.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-informacionnaya-sistema-support.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-informacionnaya-sistema-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-informacionnaya-sistema-component.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-informacionnaya-sistema-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-informacionnaya-sistema-form.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-informacionnaya-sistema-investment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-informacionnaya-sistema-investment.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-informacionnaya-sistema-list-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-informacionnaya-sistema-list-component.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-informacionnaya-sistema-list-investment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-informacionnaya-sistema-list-investment.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-informacionnaya-sistema-list-size.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-informacionnaya-sistema-list-size.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-informacionnaya-sistema-list-subindustry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-informacionnaya-sistema-list-subindustry.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-informacionnaya-sistema-size.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-informacionnaya-sistema-size.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-informacionnaya-sistema-subindustry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-informacionnaya-sistema-subindustry.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-informacionnaya-sistema-support.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-informacionnaya-sistema-support.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-component-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-component-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-component.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-form-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-form-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-form.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-investment-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-investment-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-investment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-investment.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-component-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-component-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-component.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-investment-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-investment-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-investment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-investment.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-size-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-size-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-size.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-size.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-subindustry-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-subindustry-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-subindustry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-list-subindustry.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-size-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-size-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-size.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-size.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-subindustry-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-subindustry-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-subindustry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-subindustry.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-support-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-support-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-support.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-informacionnaya-sistema-support.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-informacionnaya-sistema-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-informacionnaya-sistema-component.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-informacionnaya-sistema-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-informacionnaya-sistema-form.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-informacionnaya-sistema-investment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-informacionnaya-sistema-investment.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-informacionnaya-sistema-list-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-informacionnaya-sistema-list-component.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-informacionnaya-sistema-list-investment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-informacionnaya-sistema-list-investment.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-informacionnaya-sistema-list-size.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-informacionnaya-sistema-list-size.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-informacionnaya-sistema-list-subindustry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-informacionnaya-sistema-list-subindustry.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-informacionnaya-sistema-size.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-informacionnaya-sistema-size.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-informacionnaya-sistema-subindustry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-informacionnaya-sistema-subindustry.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-informacionnaya-sistema-support.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-informacionnaya-sistema-support.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-informacionnaya-sistema-component-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-informacionnaya-sistema-component-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-informacionnaya-sistema-component-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-informacionnaya-sistema-component-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-informacionnaya-sistema-component-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-informacionnaya-sistema-component-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-informacionnaya-sistema-form-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-informacionnaya-sistema-form-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-informacionnaya-sistema-form-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-informacionnaya-sistema-form-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-informacionnaya-sistema-form-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-informacionnaya-sistema-form-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-informacionnaya-sistema-investment-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-informacionnaya-sistema-investment-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-informacionnaya-sistema-investment-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-informacionnaya-sistema-investment-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-informacionnaya-sistema-investment-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-informacionnaya-sistema-investment-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-informacionnaya-sistema-size-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-informacionnaya-sistema-size-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-informacionnaya-sistema-size-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-informacionnaya-sistema-size-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-informacionnaya-sistema-size-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-informacionnaya-sistema-size-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-informacionnaya-sistema-subindustry-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-informacionnaya-sistema-subindustry-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-informacionnaya-sistema-subindustry-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-informacionnaya-sistema-subindustry-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-informacionnaya-sistema-subindustry-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-informacionnaya-sistema-subindustry-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-informacionnaya-sistema-support-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-informacionnaya-sistema-support-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-informacionnaya-sistema-support-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-informacionnaya-sistema-support-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-informacionnaya-sistema-support-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-informacionnaya-sistema-support-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-component-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-component-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-component.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-form-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-form-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-form.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-investment-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-investment-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-investment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-investment.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-list-component-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-list-component-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-list-component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-list-component.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-list-investment-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-list-investment-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-list-investment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-list-investment.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-list-size-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-list-size-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-list-size.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-list-size.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-list-subindustry-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-list-subindustry-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-list-subindustry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-list-subindustry.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-size-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-size-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-size.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-size.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-subindustry-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-subindustry-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-subindustry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-subindustry.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-support-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-support-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-informacionnaya-sistema-support.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-informacionnaya-sistema-support.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/i-i-s-informacionnaya-sistema-component-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-informacionnaya-sistema-component-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-informacionnaya-sistema-form-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-informacionnaya-sistema-form-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-informacionnaya-sistema-investment-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-informacionnaya-sistema-investment-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-informacionnaya-sistema-size-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-informacionnaya-sistema-size-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-informacionnaya-sistema-subindustry-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-informacionnaya-sistema-subindustry-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-informacionnaya-sistema-support-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-informacionnaya-sistema-support-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-informacionnaya-sistema-component-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-informacionnaya-sistema-component-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-informacionnaya-sistema-component-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-informacionnaya-sistema-component-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-informacionnaya-sistema-form-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-informacionnaya-sistema-form-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-informacionnaya-sistema-form-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-informacionnaya-sistema-form-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-informacionnaya-sistema-investment-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-informacionnaya-sistema-investment-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-informacionnaya-sistema-investment-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-informacionnaya-sistema-investment-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-informacionnaya-sistema-size-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-informacionnaya-sistema-size-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-informacionnaya-sistema-size-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-informacionnaya-sistema-size-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-informacionnaya-sistema-subindustry-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-informacionnaya-sistema-subindustry-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-informacionnaya-sistema-subindustry-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-informacionnaya-sistema-subindustry-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-informacionnaya-sistema-support-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-informacionnaya-sistema-support-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-informacionnaya-sistema-support-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-informacionnaya-sistema-support-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-informacionnaya-sistema-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-informacionnaya-sistema-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-informacionnaya-sistema-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-informacionnaya-sistema-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-informacionnaya-sistema-investment-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-informacionnaya-sistema-investment-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-informacionnaya-sistema-list-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-informacionnaya-sistema-list-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-informacionnaya-sistema-list-investment-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-informacionnaya-sistema-list-investment-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-informacionnaya-sistema-list-size-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-informacionnaya-sistema-list-size-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-informacionnaya-sistema-list-subindustry-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-informacionnaya-sistema-list-subindustry-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-informacionnaya-sistema-size-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-informacionnaya-sistema-size-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-informacionnaya-sistema-subindustry-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-informacionnaya-sistema-subindustry-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-informacionnaya-sistema-support-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-informacionnaya-sistema-support-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-informacionnaya-sistema-component-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-informacionnaya-sistema-component-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-informacionnaya-sistema-component-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-informacionnaya-sistema-component-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-informacionnaya-sistema-form-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-informacionnaya-sistema-form-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-informacionnaya-sistema-form-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-informacionnaya-sistema-form-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-informacionnaya-sistema-investment-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-informacionnaya-sistema-investment-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-informacionnaya-sistema-investment-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-informacionnaya-sistema-investment-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-informacionnaya-sistema-size-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-informacionnaya-sistema-size-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-informacionnaya-sistema-size-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-informacionnaya-sistema-size-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-informacionnaya-sistema-subindustry-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-informacionnaya-sistema-subindustry-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-informacionnaya-sistema-subindustry-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-informacionnaya-sistema-subindustry-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-informacionnaya-sistema-support-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-informacionnaya-sistema-support-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-informacionnaya-sistema-support-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-informacionnaya-sistema-support-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-informacionnaya-sistema-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-informacionnaya-sistema-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-informacionnaya-sistema-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-informacionnaya-sistema-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-informacionnaya-sistema-investment-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-informacionnaya-sistema-investment-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-informacionnaya-sistema-list-component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-informacionnaya-sistema-list-component-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-informacionnaya-sistema-list-investment-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-informacionnaya-sistema-list-investment-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-informacionnaya-sistema-list-size-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-informacionnaya-sistema-list-size-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-informacionnaya-sistema-list-subindustry-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-informacionnaya-sistema-list-subindustry-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-informacionnaya-sistema-size-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-informacionnaya-sistema-size-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-informacionnaya-sistema-subindustry-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-informacionnaya-sistema-subindustry-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-informacionnaya-sistema-support-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-informacionnaya-sistema-support-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/i-i-s-informacionnaya-sistema-component-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-informacionnaya-sistema-component-e', 'Unit | Controller | i-i-s-informacionnaya-sistema-component-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-informacionnaya-sistema-component-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-informacionnaya-sistema-component-l', 'Unit | Controller | i-i-s-informacionnaya-sistema-component-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-informacionnaya-sistema-form-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-informacionnaya-sistema-form-e', 'Unit | Controller | i-i-s-informacionnaya-sistema-form-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-informacionnaya-sistema-form-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-informacionnaya-sistema-form-l', 'Unit | Controller | i-i-s-informacionnaya-sistema-form-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-informacionnaya-sistema-investment-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-informacionnaya-sistema-investment-e', 'Unit | Controller | i-i-s-informacionnaya-sistema-investment-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-informacionnaya-sistema-investment-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-informacionnaya-sistema-investment-l', 'Unit | Controller | i-i-s-informacionnaya-sistema-investment-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-informacionnaya-sistema-size-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-informacionnaya-sistema-size-e', 'Unit | Controller | i-i-s-informacionnaya-sistema-size-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-informacionnaya-sistema-size-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-informacionnaya-sistema-size-l', 'Unit | Controller | i-i-s-informacionnaya-sistema-size-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-informacionnaya-sistema-subindustry-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-informacionnaya-sistema-subindustry-e', 'Unit | Controller | i-i-s-informacionnaya-sistema-subindustry-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-informacionnaya-sistema-subindustry-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-informacionnaya-sistema-subindustry-l', 'Unit | Controller | i-i-s-informacionnaya-sistema-subindustry-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-informacionnaya-sistema-support-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-informacionnaya-sistema-support-e', 'Unit | Controller | i-i-s-informacionnaya-sistema-support-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-informacionnaya-sistema-support-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-informacionnaya-sistema-support-l', 'Unit | Controller | i-i-s-informacionnaya-sistema-support-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/i-i-s-informacionnaya-sistema-component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-component', 'Unit | Model | i-i-s-informacionnaya-sistema-component', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-informacionnaya-sistema-form-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-form', 'Unit | Model | i-i-s-informacionnaya-sistema-form', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-informacionnaya-sistema-investment-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-investment', 'Unit | Model | i-i-s-informacionnaya-sistema-investment', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-informacionnaya-sistema-list-component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-list-component', 'Unit | Model | i-i-s-informacionnaya-sistema-list-component', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-informacionnaya-sistema-list-investment-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-list-investment', 'Unit | Model | i-i-s-informacionnaya-sistema-list-investment', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-informacionnaya-sistema-list-size-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-list-size', 'Unit | Model | i-i-s-informacionnaya-sistema-list-size', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-informacionnaya-sistema-list-subindustry-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-list-subindustry', 'Unit | Model | i-i-s-informacionnaya-sistema-list-subindustry', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-informacionnaya-sistema-size-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-size', 'Unit | Model | i-i-s-informacionnaya-sistema-size', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-informacionnaya-sistema-subindustry-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-subindustry', 'Unit | Model | i-i-s-informacionnaya-sistema-subindustry', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-informacionnaya-sistema-support-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-support', 'Unit | Model | i-i-s-informacionnaya-sistema-support', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/i-i-s-informacionnaya-sistema-component-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-informacionnaya-sistema-component-e', 'Unit | Route | i-i-s-informacionnaya-sistema-component-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-informacionnaya-sistema-component-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-informacionnaya-sistema-component-l', 'Unit | Route | i-i-s-informacionnaya-sistema-component-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-informacionnaya-sistema-form-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-informacionnaya-sistema-form-e', 'Unit | Route | i-i-s-informacionnaya-sistema-form-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-informacionnaya-sistema-form-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-informacionnaya-sistema-form-l', 'Unit | Route | i-i-s-informacionnaya-sistema-form-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-informacionnaya-sistema-investment-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-informacionnaya-sistema-investment-e', 'Unit | Route | i-i-s-informacionnaya-sistema-investment-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-informacionnaya-sistema-investment-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-informacionnaya-sistema-investment-l', 'Unit | Route | i-i-s-informacionnaya-sistema-investment-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-informacionnaya-sistema-size-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-informacionnaya-sistema-size-e', 'Unit | Route | i-i-s-informacionnaya-sistema-size-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-informacionnaya-sistema-size-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-informacionnaya-sistema-size-l', 'Unit | Route | i-i-s-informacionnaya-sistema-size-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-informacionnaya-sistema-subindustry-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-informacionnaya-sistema-subindustry-e', 'Unit | Route | i-i-s-informacionnaya-sistema-subindustry-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-informacionnaya-sistema-subindustry-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-informacionnaya-sistema-subindustry-l', 'Unit | Route | i-i-s-informacionnaya-sistema-subindustry-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-informacionnaya-sistema-support-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-informacionnaya-sistema-support-e', 'Unit | Route | i-i-s-informacionnaya-sistema-support-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-informacionnaya-sistema-support-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-informacionnaya-sistema-support-l', 'Unit | Route | i-i-s-informacionnaya-sistema-support-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-informacionnaya-sistema-component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-component', 'Unit | Serializer | i-i-s-informacionnaya-sistema-component', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-informacionnaya-sistema-component', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-informacionnaya-sistema-form-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-form', 'Unit | Serializer | i-i-s-informacionnaya-sistema-form', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-informacionnaya-sistema-form', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-informacionnaya-sistema-investment-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-investment', 'Unit | Serializer | i-i-s-informacionnaya-sistema-investment', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-informacionnaya-sistema-investment', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-informacionnaya-sistema-list-component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-list-component', 'Unit | Serializer | i-i-s-informacionnaya-sistema-list-component', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-informacionnaya-sistema-list-component', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-informacionnaya-sistema-list-investment-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-list-investment', 'Unit | Serializer | i-i-s-informacionnaya-sistema-list-investment', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-informacionnaya-sistema-list-investment', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-informacionnaya-sistema-list-size-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-list-size', 'Unit | Serializer | i-i-s-informacionnaya-sistema-list-size', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-informacionnaya-sistema-list-size', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-informacionnaya-sistema-list-subindustry-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-list-subindustry', 'Unit | Serializer | i-i-s-informacionnaya-sistema-list-subindustry', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-informacionnaya-sistema-list-subindustry', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-informacionnaya-sistema-size-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-size', 'Unit | Serializer | i-i-s-informacionnaya-sistema-size', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-informacionnaya-sistema-size', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-informacionnaya-sistema-subindustry-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-subindustry', 'Unit | Serializer | i-i-s-informacionnaya-sistema-subindustry', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-informacionnaya-sistema-subindustry', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-informacionnaya-sistema-support-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-informacionnaya-sistema-support', 'Unit | Serializer | i-i-s-informacionnaya-sistema-support', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-informacionnaya-sistema-support', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-informacionnaya-sistema-component', 'model:i-i-s-informacionnaya-sistema-form', 'model:i-i-s-informacionnaya-sistema-investment', 'model:i-i-s-informacionnaya-sistema-list-component', 'model:i-i-s-informacionnaya-sistema-list-investment', 'model:i-i-s-informacionnaya-sistema-list-size', 'model:i-i-s-informacionnaya-sistema-list-subindustry', 'model:i-i-s-informacionnaya-sistema-size', 'model:i-i-s-informacionnaya-sistema-subindustry', 'model:i-i-s-informacionnaya-sistema-support', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
