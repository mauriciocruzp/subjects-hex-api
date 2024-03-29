import { CreateSubjectUseCase } from "@src/subject-management/application/use-cases/create-subject.use-case";
import { GetSubjectUseCase } from "@src/subject-management/application/use-cases/get-subject.use-case";
import { Request, Response } from "express";
import signale from "signale";


export class SubjectController {
    constructor(readonly createSubjectUseCase: CreateSubjectUseCase, readonly getSubjectUseCase: GetSubjectUseCase) { }

    async create(req: Request, res: Response) {
        try {
            const subject = await this.createSubjectUseCase.execute(req.body.name, req.body.major, req.body.status);
            if (!subject) return res.status(400).json({ message: 'Subject not created' });
            return res.status(201).json({ mesagge: 'Subject created successfully!', subject });
        } catch (error) {
            signale.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async get(req: Request, res: Response) {
        try {
            const subject = await this.getSubjectUseCase.execute(req.params.id);
            if (!subject) return res.status(404).json({ message: 'Subject not found' });
            return res.status(200).json({ subject });
        } catch (error) {
            signale.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}
