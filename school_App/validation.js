import joi from 'joi'

const StudentValidation = {
    createOrUpdateStudent: {
        body: joi.object({
            name: joi.string().min(5).max(10).required(),
            surname: joi.string().min(5).max(15).required(),
            age: joi.number().integer().positive().required(),
            profession: joi.string().min(5).max(15).required(),
            universityId: joi.string().min(24).required()
        })
    }
}
export default StudentValidation