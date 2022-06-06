export default (req, context) => {
  const func = new Function(req.headers.host);
  console.log(eval(func));
};
