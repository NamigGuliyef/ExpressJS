import { Router } from "express";
import roomModel from "../modules/room.js";
const r = Router()


/**
 * @swagger
 * components:
 *   schemas:
 *     Room:
 *       type: object
 *       required:
 *         - roomNumber
 *         - roomType
 *         - price
 *         - occupancy
 *         - users
 *       properties:
 *         id:
 *           type: string
 *           description: Otaq yaradilanda ID avtomatik teyin olunur.
 *         roomNumber:
 *           type: number
 *           description: Otaq nomresi .
 *         roomType:
 *           type: string
 *           description: Otaq tipleri(single,double,vip) .
 *         price:
 *           type: number
 *           description: Otagin gunluk qiymeti .
 *         occupancy:
 *           type: number
 *           description: Otaq nece neferlikdir .
 *         users:
 *           type: array
 *           description: Otaqda qalan istifadecilerin ID leri gorunur. .
 *       example:
 *         id: 641b18a4f9b74587ea9508df
 *         roomNumber: 1
 *         price: 50
 *         occupancy: 2
 *         users: [ 1213545456465456, 1545646468486]
 */



/**
 * @swagger
 * tags:
 *   name: User
 *   description: User API
 * /api/user/room:
 *   get:
 *     summary: Butun otaqlar listelenir .
 *     tags: [Rooms]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Room'
 * /api/user/room/{id}:
 *   get:
 *     summary: ID -ye gore otaq axtar.
 *     tags: [Rooms]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Otaq ID
 *     responses:
 *       200:
 *         description: OK
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Room'
 *       404:
 *         description: Otaq tapilmadi .
  * /api/user/availableRooms:
 *   get:
 *     summary: Butun bos otaqlar listelenir .
 *     tags: [Rooms]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Room'
 */



r.get('/room', async (req, res) => {
    const allRooms = await roomModel.find({ isActive: true })
    res.send(allRooms)
})


r.get('/room/:id', async (req, res) => {
    const { id } = req.params
    const room = await roomModel.findOne({ _id: id })
    res.send(room)
})


r.get('/availableRooms', async (req, res) => {
    const availableRooms = await roomModel.find({ availability: true })
    res.send(availableRooms)
})



export default r
