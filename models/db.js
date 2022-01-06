module.exports = {                                 // The reason why i put the properties in quotation marks
  "read": require('./read/read-wrapper'),          // Is because `delete` is special javascript word
  "create": require('./create/create-wrapper'),    // To access it you need to call it with quotation mark
  "update": require('./update/update-wrapper'),    // e.g. `db["delete"]`
  "delete": require('./delete/delete-wrapper'),
}