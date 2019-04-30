const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])

// updateOptions:
// new -> faz a api retornar sempre o objeto atualizado depois
// de um metodo put
// runValidators -> roda a validação de campos tambem na
// atualização, por padrão o mongo só roda as validaçõe
// de campo na inclusão de um reistro
BillingCycle.updateOptions({ new: true, runValidators: true })

module.exports = BillingCycle
