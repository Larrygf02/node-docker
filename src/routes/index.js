const { Router } =  require('express')
const router = Router()

router.get('/', (req,res) => res.json({message: 'Hola mundo docker node'}))

module.exports = router;