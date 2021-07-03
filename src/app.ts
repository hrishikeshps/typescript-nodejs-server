import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

import apiRoutes from './routes';
import { requestLoggerMiddleware } from './middleware';

const app = express();
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestLoggerMiddleware);

/* TO BE ONLY USED FOR CORS */
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

async function main(): Promise<any> {
  try {
    apiRoutes(app);
    app.listen(app.get('port'), () => console.log(`🚀 Server running successfully on ${app.get('port')} 🚀`));
  } catch (err) {
    console.error(err);
  }
}

main();

export { app };

