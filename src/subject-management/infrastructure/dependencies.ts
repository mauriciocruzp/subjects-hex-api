import { CreateSubjectUseCase } from "@src/subject-management/application/use-cases/create-subject.use-case";
import { MysqlSubjectRepository } from "./repositories/mysql-subject.repository";
import { SubjectController } from "./controllers/subject.controller";
import { GetSubjectUseCase } from "@src/subject-management/application/use-cases/get-subject.use-case";
import { UpdateSubjectUseCase } from "../application/use-cases/update-subject.use-case";

const mysqlSubjectRepository = new MysqlSubjectRepository();

const createSubjectUseCase = new CreateSubjectUseCase(mysqlSubjectRepository);
const getSubjectUseCase = new GetSubjectUseCase(mysqlSubjectRepository);
const updateSubjectUsaCase = new UpdateSubjectUseCase(mysqlSubjectRepository);

export const subjectController = new SubjectController(createSubjectUseCase, getSubjectUseCase, updateSubjectUsaCase);
