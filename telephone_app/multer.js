import multer from "multer";
import path from 'path'

const storage = multer.diskStorage({
    destination: (req, file, cb){
        const extensionFile = ['.jpg,.gif,.png']
        if (!extensionFile.includes(path.extname(file.originalname))) {
            err = new Error('Yalnız sonu .jpg,.gif,.png fayllar ilə bitən')
        }

    }
})