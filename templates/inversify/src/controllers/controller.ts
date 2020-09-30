import { inject, injectable } from 'inversify';
import { LoggerService } from '@vf-team5/logger';
import { ConnectEvent } from '@vf-team5/types';
import { Example } from '../interfaces/interface';

/**
 * @author @jshaw-vf
 *
 * @export
 * @class ExampleControllerController
 * @
 */
@injectable()
export class ExampleController {
  constructor(@inject(LoggerService) private logger: LoggerService) {}

  /**
   *
   * @param {ConnectEvent<any>} event
   * @returns {Promise<ExampleController>}
   * @memberof ExampleControllerController
   */
  async stub(event: ConnectEvent<any>): Promise<Example> {
    this.logger.info({ event }, 'set called');

    return {
      test: 'hello',
    };
  }
}
