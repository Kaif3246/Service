import express from 'express'
import { submitServiceForm } from '../../controller/serviceForm/serviceForm.controller.js';
const router = express.Router();


router.post('/submit-service-form', submitServiceForm);

export default router;
