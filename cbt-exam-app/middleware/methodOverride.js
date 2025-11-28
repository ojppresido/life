// Middleware to handle method override for forms
function methodOverride(req, res, next) {
  if (req.body && req.body._method) {
    req.method = req.body._method.toUpperCase();
    delete req.body._method;
  }
  next();
}

module.exports = methodOverride;