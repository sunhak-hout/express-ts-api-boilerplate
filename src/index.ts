import { app } from '@libs/app';
import { connectDB } from '@libs/db';

const { PORT } = process.env;

(async function main() {
  await connectDB();
  app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
})();
