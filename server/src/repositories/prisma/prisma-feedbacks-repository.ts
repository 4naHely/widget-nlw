import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot }: FeedbackCreateData){
        await prisma.feedback.create({
            data: {
                //when key=value, no need for passing the variable name like "type: type"
                type,
                comment,
                screenshot,
            }
        })
    }
}