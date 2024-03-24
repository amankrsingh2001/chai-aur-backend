const asyncHandler = (requestHandler)=>{
        (req,res,next) => {
            Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(error))
        }
}

export {asyncHandler}


// const asyncHandler = (fn) =async ()=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             message:error.message,
//             success:false
//         })
//     }
// }