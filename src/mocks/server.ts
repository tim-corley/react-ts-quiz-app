import { setupServer } from 'msw/node';
import { handlers, networkErrorHandlers } from './handlers';

export const server = setupServer(...handlers, ...networkErrorHandlers);
