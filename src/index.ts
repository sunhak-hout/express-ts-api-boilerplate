import { app } from '@libs/app';
import { initDB } from '@libs/db';

const { PORT } = process.env;

(async function main() {
  await initDB();
  app.listen(PORT, () => console.log(`App running on port: ${PORT}`));
})();
