import { withLogtail } from '@logtail/next';

export const withLogging = (config: object): object => {
  return withLogtail(config);
};
