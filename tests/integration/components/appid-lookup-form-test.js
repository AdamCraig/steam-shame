import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('appid-lookup-form', 'Integration | Component | appid lookup form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{appid-lookup-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#appid-lookup-form}}
      template block text
    {{/appid-lookup-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
