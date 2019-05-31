const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])

// updateOptions:
// new -> faz a api retornar sempre o objeto atualizado depois
// de um metodo put
// runValidators -> roda a validação de campos tambem na
// atualização, por padrão o mongo só roda as validaçõe
// de campo na inclusão de um reistro
BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.route('count', (req, res, next) => {
  BillingCycle.count((error, value) => {
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json({value})
    }
  })
})

BillingCycle.route('summary', (req, res, next) => {
  // verificar o erro no mongo nessa rota
  /*
  {
    "erros": [
        {
            "name": "MongoError",
            "message": "The 'cursor' option is required, except for aggregate with the explain argument",
            "ok": 0,
            "errmsg": "The 'cursor' option is required, except for aggregate with the explain argument",
            "code": 9,
            "codeName": "FailedToParse"
        }
    ]
  }
  */
  BillingCycle.aggregate({
    $project: {
      credit: {$sum: "$credits.value"},
      debit: {$sum: "$debits.value"}
    }
  }, {
    $group: {
      _id: null,
      credit: {$sum: "$credit"},
      debit: {$sum: "$debit"}
    }
  }, {
    $project: {
      _id: 0,
      credit: 1,
      debit: 1
    }
  }, (error, result) => {
    if (error) {
      res.status(500).json({erros: [error]})
    } else {
      res.json(result[0] || { credit: 0, debit: 0 })
    }
  })
})

module.exports = BillingCycle
