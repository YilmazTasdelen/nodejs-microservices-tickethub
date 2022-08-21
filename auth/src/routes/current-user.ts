import express from 'express';

const router = express.Router();

router.get('/ai/users/currentuser', (req, res) => {
    res.send('Hi there');
});

export { router as cunrrentUserRouter };