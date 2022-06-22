export default (req, context) => {
  context.log("IP TEST");
  context.log(context.ip);
  context.log("HEADER TEST");
  context.log(req.headers.get("x-nf-client-connection-ip"));
};
