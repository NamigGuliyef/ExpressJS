import multer from "multer"
import path from 'path'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let err = null
        let picExtName = ['.jpg', '.png']
        if (!picExtName.includes(path.extname(file.originalname))) {
            err = new Error('Sonu .jpg, .png ile biten fayllar elave edin!')
        }
        cb(err, 'public/user')
    },
    filename: (req, file, cb) => {
        cb(null, body.name + file.originalname)
    }
})

const storageMulter = multer({ storage, limits: { fileSize: 1000000 } })
export default storageMulter;