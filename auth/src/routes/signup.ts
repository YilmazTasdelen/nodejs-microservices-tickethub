import express from 'express';

const router = express.Router();

router.post('/ai/users/signup', (req, res) => {
    res.send('Hi there');
});

export { router as signupRouter };