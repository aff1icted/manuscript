const Router = require('express')
const router = new Router
const coversConrroller = require('../controller/covers.controller')

router.post('/', coversConrroller.create)
router.get('/', coversConrroller.getAll)
router.delete('/:cover', coversConrroller.delete)
router.put('/', coversConrroller.update)

module.exports = router