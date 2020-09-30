import { inject, injectable } from 'inversify';
import { LoggerService } from '@vf-team5/logger';
import { ConnectEvent } from '@vf-team5/types';
import { Example } from '../interfaces/interface';

/**
 * @author @jshaw-vf
 *
 * @export
 * @class OfferCallbackProcessor
 * @
 */
@injectable()
export class OfferCallbackProcessor {
  constructor(@inject(LoggerService) private logger: LoggerService) {}

  /**
   *
   * @param {ConnectEvent<any>} event
   * @returns {Promise<any>}
   * @memberof OfferCallbackProcessor
   */
  async set(event: ConnectEvent<any>): Promise<Example> {
    this.logger.info({ event }, 'set called');

    return {
      test: 'test',
    };
  }
}
