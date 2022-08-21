import express from 'express';

const router = express.Router();

router.post('/ai/users/signout', (req, res) => {
    res.send('Hi there');
});

export { router as signoutRouter };