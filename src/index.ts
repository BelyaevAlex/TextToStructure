import { registerPlugin } from '@capacitor/core';

import type { TextToStructurePlugin } from './definitions';

const TextToStructure = registerPlugin<TextToStructurePlugin>(
  'TextToStructure',
  {
    web: () => import('./web').then(m => new m.TextToStructureWeb()),
  },
);

export * from './definitions';
export { TextToStructure };
