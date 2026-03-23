import '#db';
import express, { type RequestHandler } from 'express';
import { userRoutes, postRoutes } from '#routes';
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.listen(port, () => console.log(`\x1b[34mMain app listening at http://localhost:${port}\x1b[0m`));
