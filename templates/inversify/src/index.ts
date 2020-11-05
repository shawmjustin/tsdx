import 'reflect-metadata';
import { Container } from 'inversify';
import { ConnectEvent } from '@vf-team5/types';
import container from './dependencyContainer';
import { Controller } from './controllers/controller';
import { Example } from './interfaces/interface';

let cachedController: Controller;

/**
 * @description Return the cached controller if it's cached, if not
 *
 * @param cached
 * @returns {Controller}
 */
const loadController = async (
  cached: Controller
): Promise<Controller> => {
  if (cached) return cached;

  const dependencies = new Container();
  await dependencies.loadAsync(container);
  cachedController = dependencies.resolve(Controller);
  return cachedController;
};

/**
 * @param event
 * @returns
 */
export const handler = async (event: ConnectEvent<any>): Promise<Example> => {
  try {
    /**
     * Fetch controller
     */
    const controller = await loadController(cachedController);

    /**
     * Start the state machine execution
     */
    return controller.stub(event);
  } catch (error) {
    throw new Error(error)
  }
};
