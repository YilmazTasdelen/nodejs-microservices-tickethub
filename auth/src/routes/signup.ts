import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-errors';
const router = express.Router();

router.post('/ai/users/signup', [
    body('email')
        .isEmail()
        .withMessage('email must be valid'),
    body('password')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage('password must be between 4 -20 characters')


], (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // return res.status(400).send(errors.array());
        throw new RequestValidationError(errors.array());
    }

    const { email, password } = req.body;
    console.log('creating user...');


    res.send('Hi there');
});

export { router as signupRouter };