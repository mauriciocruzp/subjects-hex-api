import { SubjectEntity } from "@src/subject-management/domain/entities/subject.entity";
import { SubjectInterface } from "@src/subject-management/domain/interfaces/subject.interface";
import signale from "signale";
import SubjectModel from "../mysql/models/subject.model";

export class MysqlSubjectRepository implements SubjectInterface {
    async createSubject(subject: SubjectEntity): Promise<SubjectEntity | null > {
        try {
            const savedUser = await SubjectModel.create({
                id: subject.id,
                name: subject.name,
                major: subject.major,
                status: subject.status
            });
            return savedUser;
        } catch (error) {
            signale.error(error);

            return null;
        }
    }

    async getSubject(id: string): Promise<SubjectEntity | null> {
        throw new Error("Method not implemented.");
    }
    updateSubject(subject: SubjectEntity): Promise<SubjectEntity | null> {
        throw new Error("Method not implemented.");
    }
    deleteSubject(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    getSubjects(): Promise<SubjectEntity[]> {
        throw new Error("Method not implemented.");
    }

}
