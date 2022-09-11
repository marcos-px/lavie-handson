const { valida, Joi} = require("express-validation");

module.exports = valida({
    body: Joi.object({
        paciente_id: Joi.number().integer().required(),
        data_atendimento: Joi.date().required(),
        observacao: Joi.string().required(),
    }),
});