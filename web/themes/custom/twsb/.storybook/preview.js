import { fetchStoryHtml } from '../../../../../web/modules/contrib/storybook_server';

export const parameters = {
  server: {
    url: 'http://twsb-demo.ddev.site/',
    fetchStoryHtml,
  },
};
