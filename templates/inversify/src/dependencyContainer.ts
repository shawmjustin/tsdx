import { AsyncContainerModule } from 'inversify';
import { LoggerService } from '@vf-team5/logger';
import constants from './constants';
import { Controller } from './controllers/controller';

const container: AsyncContainerModule = new AsyncContainerModule(async bind => {
  /**
   * Constants
   */
  bind(constants.AWS_REGION).toConstantValue(
    process.env.AWS_REGION || 'us-east-1'
  );
  bind(constants.SERVICE_NAME).toConstantValue(
    process.env.SERVICE_NAME || 'service-name'
  );
  bind(constants.LOG_LEVEL).toConstantValue(process.env.LOG_LEVEL || 'info');

  /**
   * Services
   */
  bind<LoggerService>(LoggerService).toSelf();

  /**
   * AWS Services
   */

  /**
   * Controllers
   */
  bind<Controller>(Controller).toSelf();
});

export default container;
