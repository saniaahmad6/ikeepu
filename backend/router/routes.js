import {Router} from "express";
import * as  controller from "../controllers/controller.js"
const router = Router();

//notes routes
router
    .route('/notes')
    .get(controller.getNotes)
    .post(controller.addNote)
    .delete(controller.deleteNotes)
    

router
    .route('/note')
    .post(controller.deleteNote)

export default router;