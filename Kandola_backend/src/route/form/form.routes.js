import express from 'express'
import { submitForm } from '../../controller/form/form.controller.js';
const router = express.Router();


router.post('/submit-form', submitForm);

export default router;
