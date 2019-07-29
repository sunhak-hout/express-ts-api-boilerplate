import moduleAlias from 'module-alias';
import 'module-alias/register';

const basePath = `${__dirname}/../`;

moduleAlias.addAliases({
  '@controllers': `${basePath}/controllers/`,
  '@libs': `${basePath}/libs/`,
  '@services': `${basePath}/services/`,
  '@models': `${basePath}/models`,
  '@routers': `${basePath}/routers`,
});
