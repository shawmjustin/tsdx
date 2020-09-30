import 'reflect-metadata';
import { Container } from 'inversify';
import { ConnectEvent } from '@vf-team5/types';
import container from './dependencyContainer';
import { ExampleController } from './controllers/controller';
import { Example } from './interfaces/interface';

let cachedController: ExampleController;

/**
 * @description Return the cached controller if it's cached, if not
 *
 * @param cached
 * @returns {ExampleController}
 */
const loadController = async (
  cached: ExampleController
): Promise<ExampleController> => {
  if (cached) return cached;

  const dependencies = new Container();
  await dependencies.loadAsync(container);
  cachedController = dependencies.resolve(ExampleController);
  return cachedController;
};

/**
 * @param event
 * @returns
 */
export const handler = async (event: ConnectEvent<any>): Promise<Example> => {
  /**
   * Fetch controller
   */
  const controller = await loadController(cachedController);

  /**
   * Start the state machine execution
   */
  return controller.stub(event);
};
