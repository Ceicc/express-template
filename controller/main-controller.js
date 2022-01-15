const express = require("express"),
      router = express.Router()


const getController = require('./routes/get/get-controller'),
      postController = require('./routes/post/post-controller'),
      putController = require('./routes/put/put-controller'),
      deleteController = require('./routes/delete/delete-controller')


router.get("*", getController)
router.post("*", postController)
router.put("*", putController)
router.delete("*", deleteController)


router.use((req, res, next) => res.sendStatus(404))                               // No handler
router.use((error, req, res, next) => !req.headersSent && res.sendStatus(500))    // There was an error passed to next()

module.exports = router