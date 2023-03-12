import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let err = null;
        const pictureEnd = ['.png', '.jpg']
        if (!pictureEnd.includes(path.extname(file.originalname))) {
            err = new Error('Sekilin sonlugu .jpg , .png ile bitmelidir!')
        }
        cb(err, 'public/photos')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.username + file.originalname)
    }
})

const multerStroge = multer({ storage, limits: { fileSize: 2000000 } })
export default multerStroge