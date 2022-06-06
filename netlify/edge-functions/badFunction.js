export default (req, context) => {
  const func = new Function("a", "b", 'return a + " " + b');
  console.log(eval('func("hello", "world")'));
};
