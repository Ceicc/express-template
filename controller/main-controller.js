const express = require("express"),
      router = express.Router()


const getController = require('./get/get-controller'),
      postController = require('./post/post-controller'),
      putController = require('./put/put-controller'),
      deleteController = require('./delete/delete-controller')


router.get("*", getController)
router.post("*", postController)
router.put("*", putController)
router.delete("*", deleteController)


router.use((req, res, next) => res.sendStatus(404))                               // No handler
router.use((error, req, res, next) => !req.headersSent && res.sendStatus(500))    // There was an error passed to next()

module.exports = router