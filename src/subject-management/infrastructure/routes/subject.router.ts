import express from 'express';
import { subjectController } from '../dependencies';

export const subjectManagementRouter = express.Router();

subjectManagementRouter.post('/', subjectController.create.bind(subjectController));
subjectManagementRouter.get('/:id', subjectController.get.bind(subjectController));
