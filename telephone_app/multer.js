import multer from "multer";
import path from 'path'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const extensionFile = [".jpg", ".gif", ".png"]
        let err = null
        if (extensionFile.includes(path.extname(file.originalname))) {
            cb(err, 'gallery')
        } else {
            err = new Error('Yalnız sonu .jpg,.gif,.png şəkillər əlavə edin!')
            cb(err)
        }
    },
    filename: (req, file, cb) => {
        cb(null, req.body.model + file.originalname.replaceAll(" ", "_"))
    }
})

const storageMulter = multer({ storage, limits: { fileSize: 1000000 } })
export default storageMulter;
