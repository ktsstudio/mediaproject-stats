import * as React from 'react';

import { statPage } from './statsPages';
import { StatsSendPageType } from './types/send';

export default ({ event, title, path }: StatsSendPageType): void => {
  React.useEffect(() => {
    statPage({
      event,
      title,
      path,
    });
  }, [path]);
};
