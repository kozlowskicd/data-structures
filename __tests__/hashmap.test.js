const HashMap = require('../hashmap/hashmap.js');

describe('HashMap', () => {
  describe('.hash method', () => {
    it('hashes keys to a value within the correct range', () => {
      const table = new HashMap();
      expect(typeof table.hash('testing')).toBe('number');
      expect(table.hash('testing')).toBeLessThan(table.data.length);
    });
  });
  describe('.add method', () => {
    it('adds a key and value to a linked list in the table', () => {
      const table = new HashMap();
      table.add('test', 123);
      expect(table.data).toContainEqual({ head: { data: { test: 123 }, next: null } });
    });
  });
  describe('.contains method', () => {
    it('returns true if a ket is in the table', () => {
      const table = new HashMap();
      table.add('test', 123);
      expect(table.contains('test')).toBe(true);
    });
    it('returns false if a key is not in the table', () => {
      const table = new HashMap();
      expect(table.contains('nope')).toBe(false);
    });
  });
  describe('.get method', () => {
    it('takes a key and returns it\'s value from the table', () => {
      const table = new HashMap();
      table.add('test', 123);
      expect(table.get('test')).toEqual(123);
    });
    it('returns null if the key is not in the table', () => {
      const table = new HashMap();
      expect(table.get('nope')).toBeNull();
    });
  });
  describe('collision handling', () => {
    it('adds colliding keys as the next in that bucket\'s linked list', () => {
      const table = new HashMap();
      table.add('test', 123);
      table.add('tset', 'this is next');
      expect(table.data).toContainEqual({ head: { data: { test: 123 }, next: { data: { tset: 'this is next' }, next: null } } });
    });
    it('.get can retrieve collided keys regardless of their posistion in that bucket\'s linked list', () => {
      const table = new HashMap();
      table.add('test', 123);
      table.add('tset', 'this is next');
      expect(table.get('test')).toBe(123);
      expect(table.get('tset')).toBe('this is next');
    });
    it('.contains can return the boolean for collided keys regardless of their posistion in that bucket\'s linked list', () => {
      const table = new HashMap();
      table.add('test', 123);
      table.add('tset', 'this is next');
      expect(table.contains('test')).toBe(true);
      expect(table.contains('tset')).toBe(true);
    });
  });
});
