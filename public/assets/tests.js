define('client/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('client/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('client/tests/components/bar-chart.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/bar-chart.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/bar-chart.js should pass jshint.\ncomponents/bar-chart.js: line 87, col 32, \'d\' is defined but never used.\ncomponents/bar-chart.js: line 20, col 13, \'selection\' is defined but never used.\ncomponents/bar-chart.js: line 39, col 9, \'yd\' is defined but never used.\ncomponents/bar-chart.js: line 114, col 11, \'selection\' is defined but never used.\ncomponents/bar-chart.js: line 117, col 9, \'x\' is defined but never used.\ncomponents/bar-chart.js: line 125, col 9, \'yd\' is defined but never used.\n\n6 errors');
  });
});
define('client/tests/components/data-map.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/data-map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/data-map.js should pass jshint.\ncomponents/data-map.js: line 83, col 38, \'i\' is defined but never used.\ncomponents/data-map.js: line 109, col 38, \'d\' is defined but never used.\ncomponents/data-map.js: line 215, col 39, \'i\' is defined but never used.\ncomponents/data-map.js: line 223, col 21, \'index\' is defined but never used.\ncomponents/data-map.js: line 249, col 38, \'d\' is defined but never used.\ncomponents/data-map.js: line 292, col 15, \'colorScale\' is defined but never used.\ncomponents/data-map.js: line 294, col 15, \'mapData\' is defined but never used.\ncomponents/data-map.js: line 70, col 37, \'$\' is not defined.\ncomponents/data-map.js: line 206, col 38, \'$\' is not defined.\n\n9 errors');
  });
});
define('client/tests/components/pie-chart.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/pie-chart.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/pie-chart.js should pass jshint.\ncomponents/pie-chart.js: line 85, col 44, \'i\' is defined but never used.\ncomponents/pie-chart.js: line 103, col 43, \'i\' is defined but never used.\ncomponents/pie-chart.js: line 103, col 40, \'d\' is defined but never used.\ncomponents/pie-chart.js: line 162, col 29, \'i\' is defined but never used.\ncomponents/pie-chart.js: line 162, col 26, \'d\' is defined but never used.\ncomponents/pie-chart.js: line 237, col 44, \'i\' is defined but never used.\ncomponents/pie-chart.js: line 255, col 42, \'i\' is defined but never used.\ncomponents/pie-chart.js: line 255, col 39, \'d\' is defined but never used.\ncomponents/pie-chart.js: line 294, col 34, Expected \'{\' and instead saw \'return\'.\ncomponents/pie-chart.js: line 40, col 22, \'$\' is not defined.\ncomponents/pie-chart.js: line 41, col 26, \'$\' is not defined.\ncomponents/pie-chart.js: line 191, col 22, \'$\' is not defined.\ncomponents/pie-chart.js: line 192, col 26, \'$\' is not defined.\n\n13 errors');
  });
});
define('client/tests/components/range-selector.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/range-selector.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/range-selector.js should pass jshint.\ncomponents/range-selector.js: line 56, col 54, \'i\' is defined but never used.\ncomponents/range-selector.js: line 95, col 13, \'gy\' is defined but never used.\ncomponents/range-selector.js: line 160, col 54, \'i\' is defined but never used.\ncomponents/range-selector.js: line 137, col 15, \'lineColor\' is defined but never used.\ncomponents/range-selector.js: line 189, col 13, \'minValue\' is defined but never used.\ncomponents/range-selector.js: line 190, col 21, \'maxValue\' is defined but never used.\n\n6 errors');
  });
});
define('client/tests/components/year-evolution.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/year-evolution.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/year-evolution.js should pass jshint.\ncomponents/year-evolution.js: line 118, col 31, \'i\' is defined but never used.\ncomponents/year-evolution.js: line 134, col 32, \'d\' is defined but never used.\ncomponents/year-evolution.js: line 222, col 33, \'i\' is defined but never used.\ncomponents/year-evolution.js: line 171, col 11, \'currentYear\' is defined but never used.\ncomponents/year-evolution.js: line 173, col 11, \'lineColor\' is defined but never used.\ncomponents/year-evolution.js: line 27, col 21, \'$\' is not defined.\ncomponents/year-evolution.js: line 28, col 26, \'$\' is not defined.\ncomponents/year-evolution.js: line 176, col 17, \'$\' is not defined.\ncomponents/year-evolution.js: line 177, col 18, \'$\' is not defined.\n\n9 errors');
  });
});
define('client/tests/controllers/academics.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/academics.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/academics.js should pass jshint.\ncontrollers/academics.js: line 97, col 19, \'zoneCode\' is defined but never used.\ncontrollers/academics.js: line 186, col 30, \'i\' is defined but never used.\ncontrollers/academics.js: line 7, col 7, \'$\' is not defined.\ncontrollers/academics.js: line 110, col 21, \'$\' is not defined.\ncontrollers/academics.js: line 119, col 19, \'$\' is not defined.\n\n5 errors');
  });
});
define('client/tests/controllers/libraries-loans.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/libraries-loans.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/libraries-loans.js should pass jshint.\ncontrollers/libraries-loans.js: line 45, col 19, \'year\' is defined but never used.\ncontrollers/libraries-loans.js: line 46, col 19, \'yearDim\' is defined but never used.\ncontrollers/libraries-loans.js: line 48, col 19, \'zoneCode\' is defined but never used.\ncontrollers/libraries-loans.js: line 49, col 17, \'data\' is defined but never used.\ncontrollers/libraries-loans.js: line 91, col 10, \'getSum\' is defined but never used.\n\n5 errors');
  });
});
define('client/tests/controllers/libraries-visits.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/libraries-visits.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/libraries-visits.js should pass jshint.\ncontrollers/libraries-visits.js: line 45, col 19, \'year\' is defined but never used.\ncontrollers/libraries-visits.js: line 46, col 19, \'yearDim\' is defined but never used.\ncontrollers/libraries-visits.js: line 48, col 19, \'zoneCode\' is defined but never used.\ncontrollers/libraries-visits.js: line 49, col 17, \'data\' is defined but never used.\ncontrollers/libraries-visits.js: line 91, col 10, \'getSum\' is defined but never used.\n\n5 errors');
  });
});
define('client/tests/controllers/libraries.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/libraries.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/libraries.js should pass jshint.\ncontrollers/libraries.js: line 37, col 15, \'districtDim\' is defined but never used.\n\n1 error');
  });
});
define('client/tests/controllers/poblacio.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/poblacio.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/poblacio.js should pass jshint.\ncontrollers/poblacio.js: line 87, col 19, \'zoneCode\' is defined but never used.\ncontrollers/poblacio.js: line 170, col 30, \'i\' is defined but never used.\ncontrollers/poblacio.js: line 100, col 21, \'$\' is not defined.\ncontrollers/poblacio.js: line 108, col 19, \'$\' is not defined.\n\n4 errors');
  });
});
define('client/tests/controllers/population-vs-libraries.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/population-vs-libraries.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/population-vs-libraries.js should pass jshint.\ncontrollers/population-vs-libraries.js: line 59, col 64, \'index\' is defined but never used.\ncontrollers/population-vs-libraries.js: line 72, col 15, \'districtDim\' is defined but never used.\ncontrollers/population-vs-libraries.js: line 105, col 54, Missing semicolon.\n\n3 errors');
  });
});
define('client/tests/controllers/population-vs-loans.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/population-vs-loans.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/population-vs-loans.js should pass jshint.\ncontrollers/population-vs-loans.js: line 65, col 64, \'index\' is defined but never used.\ncontrollers/population-vs-loans.js: line 79, col 15, \'districtDim\' is defined but never used.\n\n2 errors');
  });
});
define('client/tests/controllers/population-vs-visits.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/population-vs-visits.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/population-vs-visits.js should pass jshint.\ncontrollers/population-vs-visits.js: line 65, col 64, \'index\' is defined but never used.\ncontrollers/population-vs-visits.js: line 79, col 15, \'districtDim\' is defined but never used.\n\n2 errors');
  });
});
define('client/tests/controllers/visits-vs-loans.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/visits-vs-loans.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/visits-vs-loans.js should pass jshint.\ncontrollers/visits-vs-loans.js: line 45, col 19, \'year\' is defined but never used.\ncontrollers/visits-vs-loans.js: line 46, col 19, \'yearDim\' is defined but never used.\ncontrollers/visits-vs-loans.js: line 48, col 19, \'zoneCode\' is defined but never used.\ncontrollers/visits-vs-loans.js: line 49, col 17, \'data\' is defined but never used.\ncontrollers/visits-vs-loans.js: line 91, col 10, \'getSum\' is defined but never used.\n\n5 errors');
  });
});
define('client/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('client/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('client/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'client/tests/helpers/start-app', 'client/tests/helpers/destroy-app'], function (exports, _qunit, _clientTestsHelpersStartApp, _clientTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _clientTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _clientTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('client/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('client/tests/helpers/resolver', ['exports', 'client/resolver', 'client/config/environment'], function (exports, _clientResolver, _clientConfigEnvironment) {

  var resolver = _clientResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _clientConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _clientConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('client/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('client/tests/helpers/start-app', ['exports', 'ember', 'client/app', 'client/config/environment'], function (exports, _ember, _clientApp, _clientConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _clientConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _clientApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('client/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('client/tests/integration/components/bar-chart-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('bar-chart', 'Integration | Component | bar chart', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 13
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'bar-chart', ['loc', [null, [1, 0], [1, 13]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.4.5',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'bar-chart', [], [], 0, null, ['loc', [null, [2, 4], [4, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('client/tests/integration/components/bar-chart-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/bar-chart-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/bar-chart-test.js should pass jshint.');
  });
});
define('client/tests/integration/components/data-map-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('data-map', 'Integration | Component | data map', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 12
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'data-map', ['loc', [null, [1, 0], [1, 12]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.4.5',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'data-map', [], [], 0, null, ['loc', [null, [2, 4], [4, 17]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('client/tests/integration/components/data-map-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/data-map-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/data-map-test.js should pass jshint.');
  });
});
define('client/tests/integration/components/pie-chart-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('pie-chart', 'Integration | Component | pie chart', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 13
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'pie-chart', ['loc', [null, [1, 0], [1, 13]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.4.5',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'pie-chart', [], [], 0, null, ['loc', [null, [2, 4], [4, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('client/tests/integration/components/pie-chart-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/pie-chart-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/pie-chart-test.js should pass jshint.');
  });
});
define('client/tests/integration/components/range-selector-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('range-selector', 'Integration | Component | range selector', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 18
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'range-selector', ['loc', [null, [1, 0], [1, 18]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.4.5',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'range-selector', [], [], 0, null, ['loc', [null, [2, 4], [4, 23]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('client/tests/integration/components/range-selector-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/range-selector-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/range-selector-test.js should pass jshint.');
  });
});
define('client/tests/integration/components/year-evolution-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('year-evolution', 'Integration | Component | year evolution', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 18
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'year-evolution', ['loc', [null, [1, 0], [1, 18]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.4.5',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'year-evolution', [], [], 0, null, ['loc', [null, [2, 4], [4, 23]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('client/tests/integration/components/year-evolution-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/year-evolution-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/year-evolution-test.js should pass jshint.');
  });
});
define('client/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('client/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('client/tests/routes/academics.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/academics.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/academics.js should pass jshint.\nroutes/academics.js: line 16, col 42, Expected an assignment or function call and instead saw an expression.\nroutes/academics.js: line 22, col 42, Expected an assignment or function call and instead saw an expression.\nroutes/academics.js: line 28, col 33, \'transition\' is defined but never used.\nroutes/academics.js: line 37, col 24, \'transition\' is defined but never used.\nroutes/academics.js: line 14, col 27, \'Promise\' is not defined.\nroutes/academics.js: line 20, col 27, \'Promise\' is not defined.\n\n6 errors');
  });
});
define('client/tests/routes/libraries-loans.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/libraries-loans.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/libraries-loans.js should pass jshint.\nroutes/libraries-loans.js: line 16, col 42, Expected an assignment or function call and instead saw an expression.\nroutes/libraries-loans.js: line 23, col 33, \'transition\' is defined but never used.\nroutes/libraries-loans.js: line 32, col 24, \'transition\' is defined but never used.\nroutes/libraries-loans.js: line 14, col 27, \'Promise\' is not defined.\n\n4 errors');
  });
});
define('client/tests/routes/libraries-visits.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/libraries-visits.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/libraries-visits.js should pass jshint.\nroutes/libraries-visits.js: line 16, col 42, Expected an assignment or function call and instead saw an expression.\nroutes/libraries-visits.js: line 23, col 33, \'transition\' is defined but never used.\nroutes/libraries-visits.js: line 32, col 24, \'transition\' is defined but never used.\nroutes/libraries-visits.js: line 14, col 27, \'Promise\' is not defined.\n\n4 errors');
  });
});
define('client/tests/routes/libraries.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/libraries.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/libraries.js should pass jshint.\nroutes/libraries.js: line 16, col 42, Expected an assignment or function call and instead saw an expression.\nroutes/libraries.js: line 23, col 33, \'transition\' is defined but never used.\nroutes/libraries.js: line 32, col 24, \'transition\' is defined but never used.\nroutes/libraries.js: line 14, col 27, \'Promise\' is not defined.\n\n4 errors');
  });
});
define('client/tests/routes/poblacio.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/poblacio.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/poblacio.js should pass jshint.\nroutes/poblacio.js: line 16, col 42, Expected an assignment or function call and instead saw an expression.\nroutes/poblacio.js: line 22, col 42, Expected an assignment or function call and instead saw an expression.\nroutes/poblacio.js: line 28, col 33, \'transition\' is defined but never used.\nroutes/poblacio.js: line 37, col 24, \'transition\' is defined but never used.\nroutes/poblacio.js: line 14, col 27, \'Promise\' is not defined.\nroutes/poblacio.js: line 20, col 27, \'Promise\' is not defined.\n\n6 errors');
  });
});
define('client/tests/routes/population-vs-libraries.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/population-vs-libraries.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/population-vs-libraries.js should pass jshint.\nroutes/population-vs-libraries.js: line 21, col 42, Expected an assignment or function call and instead saw an expression.\nroutes/population-vs-libraries.js: line 28, col 33, \'transition\' is defined but never used.\nroutes/population-vs-libraries.js: line 38, col 24, \'transition\' is defined but never used.\nroutes/population-vs-libraries.js: line 19, col 27, \'Promise\' is not defined.\n\n4 errors');
  });
});
define('client/tests/routes/population-vs-loans.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/population-vs-loans.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/population-vs-loans.js should pass jshint.\nroutes/population-vs-loans.js: line 21, col 42, Expected an assignment or function call and instead saw an expression.\nroutes/population-vs-loans.js: line 28, col 33, \'transition\' is defined but never used.\nroutes/population-vs-loans.js: line 38, col 24, \'transition\' is defined but never used.\nroutes/population-vs-loans.js: line 19, col 27, \'Promise\' is not defined.\n\n4 errors');
  });
});
define('client/tests/routes/population-vs-visits.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/population-vs-visits.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/population-vs-visits.js should pass jshint.\nroutes/population-vs-visits.js: line 21, col 42, Expected an assignment or function call and instead saw an expression.\nroutes/population-vs-visits.js: line 28, col 33, \'transition\' is defined but never used.\nroutes/population-vs-visits.js: line 38, col 24, \'transition\' is defined but never used.\nroutes/population-vs-visits.js: line 19, col 27, \'Promise\' is not defined.\n\n4 errors');
  });
});
define('client/tests/routes/visits-vs-loans.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/visits-vs-loans.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/visits-vs-loans.js should pass jshint.\nroutes/visits-vs-loans.js: line 16, col 42, Expected an assignment or function call and instead saw an expression.\nroutes/visits-vs-loans.js: line 23, col 33, \'transition\' is defined but never used.\nroutes/visits-vs-loans.js: line 32, col 24, \'transition\' is defined but never used.\nroutes/visits-vs-loans.js: line 14, col 27, \'Promise\' is not defined.\n\n4 errors');
  });
});
define('client/tests/services/data-service.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/data-service.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/data-service.js should pass jshint.\nservices/data-service.js: line 4, col 9, Redefinition of \'crossfilter\'.\n\n1 error');
  });
});
define('client/tests/test-helper', ['exports', 'client/tests/helpers/resolver', 'ember-qunit'], function (exports, _clientTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_clientTestsHelpersResolver['default']);
});
define('client/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('client/tests/transforms/array.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - transforms/array.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/array.js should pass jshint.');
  });
});
define('client/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('client/tests/unit/adapters/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('client/tests/unit/controllers/academics-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:academics', 'Unit | Controller | academics', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('client/tests/unit/controllers/academics-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/academics-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/academics-test.js should pass jshint.');
  });
});
define('client/tests/unit/controllers/libraries-loans-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:libraries-loans', 'Unit | Controller | libraries loans', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('client/tests/unit/controllers/libraries-loans-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/libraries-loans-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/libraries-loans-test.js should pass jshint.');
  });
});
define('client/tests/unit/controllers/libraries-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:libraries', 'Unit | Controller | libraries', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('client/tests/unit/controllers/libraries-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/libraries-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/libraries-test.js should pass jshint.');
  });
});
define('client/tests/unit/controllers/libraries-visits-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:libraries-visits', 'Unit | Controller | libraries visits', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('client/tests/unit/controllers/libraries-visits-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/libraries-visits-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/libraries-visits-test.js should pass jshint.');
  });
});
define('client/tests/unit/controllers/poblacio-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:poblacio', 'Unit | Controller | poblacio', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('client/tests/unit/controllers/poblacio-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/poblacio-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/poblacio-test.js should pass jshint.');
  });
});
define('client/tests/unit/controllers/population-vs-libraries-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:population-vs-libraries', 'Unit | Controller | population vs libraries', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('client/tests/unit/controllers/population-vs-libraries-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/population-vs-libraries-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/population-vs-libraries-test.js should pass jshint.');
  });
});
define('client/tests/unit/controllers/population-vs-loans-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:population-vs-loans', 'Unit | Controller | population vs loans', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('client/tests/unit/controllers/population-vs-loans-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/population-vs-loans-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/population-vs-loans-test.js should pass jshint.');
  });
});
define('client/tests/unit/controllers/population-vs-visits-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:population-vs-visits', 'Unit | Controller | population vs visits', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('client/tests/unit/controllers/population-vs-visits-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/population-vs-visits-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/population-vs-visits-test.js should pass jshint.');
  });
});
define('client/tests/unit/controllers/visits-vs-loans-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:visits-vs-loans', 'Unit | Controller | visits vs loans', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('client/tests/unit/controllers/visits-vs-loans-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/visits-vs-loans-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/visits-vs-loans-test.js should pass jshint.');
  });
});
define('client/tests/unit/models/poblacio-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('poblacio', 'Unit | Model | poblacio', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('client/tests/unit/models/poblacio-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/poblacio-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/poblacio-test.js should pass jshint.');
  });
});
define('client/tests/unit/routes/academics-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:academics', 'Unit | Route | academics', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('client/tests/unit/routes/academics-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/academics-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/academics-test.js should pass jshint.');
  });
});
define('client/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('client/tests/unit/routes/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('client/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('client/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('client/tests/unit/routes/informacio-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:informacio', 'Unit | Route | informacio', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('client/tests/unit/routes/informacio-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/informacio-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/informacio-test.js should pass jshint.');
  });
});
define('client/tests/unit/routes/libraries-loans-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:libraries-loans', 'Unit | Route | libraries loans', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('client/tests/unit/routes/libraries-loans-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/libraries-loans-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/libraries-loans-test.js should pass jshint.');
  });
});
define('client/tests/unit/routes/libraries-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:libraries', 'Unit | Route | libraries', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('client/tests/unit/routes/libraries-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/libraries-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/libraries-test.js should pass jshint.');
  });
});
define('client/tests/unit/routes/libraries-visits-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:libraries-visits', 'Unit | Route | libraries visits', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('client/tests/unit/routes/libraries-visits-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/libraries-visits-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/libraries-visits-test.js should pass jshint.');
  });
});
define('client/tests/unit/routes/poblacio-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:poblacio', 'Unit | Route | poblacio', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('client/tests/unit/routes/poblacio-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/poblacio-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/poblacio-test.js should pass jshint.');
  });
});
define('client/tests/unit/routes/population-vs-libraries-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:population-vs-libraries', 'Unit | Route | population vs libraries', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('client/tests/unit/routes/population-vs-libraries-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/population-vs-libraries-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/population-vs-libraries-test.js should pass jshint.');
  });
});
define('client/tests/unit/routes/population-vs-loans-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:population-vs-loans', 'Unit | Route | population vs loans', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('client/tests/unit/routes/population-vs-loans-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/population-vs-loans-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/population-vs-loans-test.js should pass jshint.');
  });
});
define('client/tests/unit/routes/population-vs-visits-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:population-vs-visits', 'Unit | Route | population vs visits', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('client/tests/unit/routes/population-vs-visits-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/population-vs-visits-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/population-vs-visits-test.js should pass jshint.');
  });
});
define('client/tests/unit/routes/visits-vs-loans-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:visits-vs-loans', 'Unit | Route | visits vs loans', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('client/tests/unit/routes/visits-vs-loans-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/visits-vs-loans-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/visits-vs-loans-test.js should pass jshint.');
  });
});
define('client/tests/unit/services/data-service-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:data-service', 'Unit | Service | data service', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('client/tests/unit/services/data-service-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services/data-service-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/data-service-test.js should pass jshint.');
  });
});
define('client/tests/unit/transforms/array-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('transform:array', 'Unit | Transform | array', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var transform = this.subject();
    assert.ok(transform);
  });
});
define('client/tests/unit/transforms/array-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/transforms/array-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/transforms/array-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('client/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map