import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let err = null
        if (!['.jpg', '.png'].includes(path.extname(file.originalname))) {
            err = new Error(' .jpg, .png formatlarda sekiller yukleyin!')
        }
        cb(err, 'gallery')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name + file.originalname.replace(' ', '_'))
    }
})

const multerStorage = multer({ storage, limits: { fileSize: 1000000 } })

export default multerStorage