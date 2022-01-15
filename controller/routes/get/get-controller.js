const express = require("express"),
      router = express.Router(),
      range = require("@ceicc/range"),
      { resolve } = require("path")


router.get('/', (req, res, next) => {

  res.sendFile(resolve('./view/index.html'))

})

router.get('/public/*', async (req, res, next) => {

  const path = resolve('.' + req.path.replace(/\.\./g, ""))

  range(path, res, {
    headers: req.headers,
    conditional: true,
    range: true,
    maxAge: 10800,         // 3 Hours
    notFound: true,
  }).catch(next)

})


module.exports = router