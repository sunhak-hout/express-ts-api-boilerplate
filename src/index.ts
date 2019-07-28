import { app } from './libs/app';

const { PORT } = process.env;

app.get('/', (req, res) => res.send({ message: 'OK' }));

app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
