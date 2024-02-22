export const errorHandler = (statusCode , message)=>{

    const err = new Error()
    err.statuscode = statusCode
    err.message = message
    return err

}