import { CreateNodes } from '@nx/devkit';
import { dirname } from 'path';

export const createNodes: CreateNodes = [
  '**/project.json',
  (fileName) => {
    const root = dirname(fileName);

    return {
      projects: {
        [root]: {
          targets: {
            echo: {
              executor: '@nx-test/plugin-a:echo',
            },
          },
        },
      },
    };
  },
];
