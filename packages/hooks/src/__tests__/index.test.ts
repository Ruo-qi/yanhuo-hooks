import * as hook from '..';

describe('hook', () => {
  test('module export normal', () => {
    Object.keys(hook).forEach((key) => {
      expect(hook[key]).toBeDefined();
    });
  });
});
