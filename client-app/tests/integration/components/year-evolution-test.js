import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('year-evolution', 'Integration | Component | year evolution', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{year-evolution}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#year-evolution}}
      template block text
    {{/year-evolution}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
