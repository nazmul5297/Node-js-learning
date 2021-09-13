const CustomError = require('./custom.error');

class UniqueCheckError extends CustomError {
    statusCode = 400;

    constructor(errors) {
        super("uniqie check");
        this.errors = errors;
        console.log(" erro uuni")
        Object.setPrototypeOf(this, UniqueCheckError.prototype);
    }

    serializeErrors() {
        const formattedErrors = {message: this.errors};
        //console.log(formattedErrors);
        return formattedErrors;

        // const formattedErrors = this.errors(e => {
        //     return {message: e.msg, field: e.param};
        // })
        // return formattedErrors;
    
    }
}

module.exports = UniqueCheckError;