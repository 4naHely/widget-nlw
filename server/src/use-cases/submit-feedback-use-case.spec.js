import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const createFeedbackSpy = jest.fn();
const sendEmailsSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendEmailsSpy }
)

describe('Submit feedback', () => {

    it('should be able to submit a feedback', async() => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'test comment',
            screenshot: 'data:image/png;base64test.png',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendEmailsSpy).toHaveBeenCalled();
    });

    it('should not be able to submit a feedback without type property',  async() => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'test comment',
            screenshot: 'data:image/png;base64test.png',
        })).rejects.toThrow();
    });

    it('should not be able to submit a feedback without comment property',  async() => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64test.png',
        })).rejects.toThrow();
    });

    it('should not be able to submit a feedback without an invalid screenshot',  async() => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'test comment',
            screenshot: 'test.png',
        })).rejects.toThrow();
    });
})