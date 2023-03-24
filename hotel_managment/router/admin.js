import { Router } from "express";
import { allReservedRoom, cancelReserveRoomNum, createRoom, makeRoomAvailableRoomNum, reserveRoom, updateRoom, updateRoomIsActive } from "../controller/admin.js";
const r = Router()


r.post('/room', createRoom)
r.put('/room/:id', updateRoom)
r.delete('/room/:id', updateRoomIsActive)
r.post('/reserveRoom', reserveRoom)
r.get('/reservedRooms', allReservedRoom)
r.put('/cancelReserve/:roomNumber',cancelReserveRoomNum )
r.put('/makeRoomAvailable/:roomNumber', makeRoomAvailableRoomNum)


export default r
