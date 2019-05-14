// =====================================================================================================
//            _   _       _                         
//           | | | |_ __ (_)_   _____ _ __ ___  ___ 
//    _____  | | | | '_ \| \ \ / / _ \ '__/ __|/ _ \
//   |_____| | |_| | | | | |\ V /  __/ |  \__ \  __/
//            \___/|_| |_|_| \_/ \___|_|  |___/\___|
//                                                 
// =====================================================================================================
const expect = require('chai').expect;
/**
 * Tests the class component inside `~/src/components/universe/compnent.js`.
 * 
 * @memberof Test
 * @name Universe
 * 
 * @requires NPM:chai
 */
describe('Universe', function() {
  describe('Member functions', function() {
    test('isCreated()', function(context){
      const output = context.render({});
      var component = output.component;
      expect(component.state._isCreated).to.equal(true);
    });
    
    test('isMounted()', function(context){
      const output = context.render({});
      var component = output.component;
      expect(component.state._isMounted).to.equal(true);
    });
  });
});