const CustomError = require('../errors/custom.error');

const errorHandler = (err, req, res, next) => {
    console.log('prototype set')
    if(err instanceof CustomError) {
        return res.status(err.statusCode).json({
            errors: err.serializeErrors()
        })
    }

    return res.status(500).json({
        errors: [{message: 'Something went wrong'}]
    })

    next();
}

module.exports = errorHandler;