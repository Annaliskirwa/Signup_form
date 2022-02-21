import Validator from 'validator'

class FormValidator {
    // Initialize the objects in the form validator class
    constructor(validations){
        this.validations = validations
    }
    // checks all the field validations
    validate(state){
        let validation = this.valid();
        // Do this for all/ every validation rule
        this.validations.forEach(rule =>{
            if(!validation[rule.field].isInvalid){
                // Converting the field value to string
                const field_value = state[rule.field].toString();
                const args = rule.args || [];
                // Checking the type of rule method 
                const validation_method = typeof rule.method ==='string' ? Validator[rule.method] : rule.method
                if(validation_method(field_value, ...args, state) != rule.validWhen){
                    validation[rule.field] = {
                        // the validation status and message
                        isInvalid: true,
                        message: rule.message
                    }
                    validation.isValid = false;
                }
            }
        });
        return validation;
    }
    valid(){
        const validation = {}
        // maps the validation rule on the fields
        this.validations.map(rule => (validation[rule.field]={
            isInvalid: false,
            message: ''
        }));
        return {
            isValid: true,
            ...validation
        };
    }
}
export default FormValidator;