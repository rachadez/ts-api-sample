import http from 'http'
import express, { Express } from 'express';
import routes from './routes/index';
import { startDatabase }from './models/db'

const router: Express = express();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use('/', routes);

startDatabase();
const httpServer = http.createServer(router);
const PORT = 3000;
httpServer.listen(PORT, () => {
    console.log(`server is running on port ${PORT}...`)
})