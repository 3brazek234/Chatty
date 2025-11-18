const validate = (schema, property) => (req, res, next) => {
  const { error } = schema.validate(req[property]);
  const valid = error == null;

  if (valid) {
    next();
  } else {
    const { details } = error;
    const message = details.map((i) => i.message).join(",");

    console.error(`Validation Error for ${property}: ${message}`);

    res.status(400).json({ success: false, message: message });
  }
};

module.exports = validate;
