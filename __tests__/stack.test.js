const Stack = require('../stack/stack.js');

describe('Stack', () => {
  it('can create a new instance', () => {
    const stack = new Stack();
    expect(stack).toBeInstanceOf(Stack);
  });
  describe('Push Method', () => {
    it('can push a value and set as the top', () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.top.value).toEqual(1);
    });
    it('keeps the newest pushed item as the top', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      expect(stack.top.value).toEqual(2);
      expect(stack.top.next.value).toEqual(1);
    });
  });
  describe('Peek Method', () => {
    it('returns the value of the top node', () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.peek()).toEqual(1);
    });
    it('does not alter the stack when called', () => {
      const stack = new Stack();
      stack.push(1);
      stack.peek();
      expect(stack.top.value).toEqual(1);
    });
    it('returns null if there is no top node', () => {
      const stack = new Stack();
      expect(stack.peek()).toBeNull();
    });
  });
  describe('Pop Method', () => {
    it('returns the value of the top node', () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.pop()).toEqual(1);
    });
    it('sets the next node as top when the stack is popped', () => {
      const stack = new Stack();
      stack.push('one');
      stack.push('two');
      stack.push('three');
      stack.pop();
      expect(stack.top.value).toEqual('two');
    });
    it('returns null if there is no top node', () => {
      const stack = new Stack();
      expect(stack.pop()).toBeNull();
    });
  });
});
