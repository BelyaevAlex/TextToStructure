import { WebPlugin } from '@capacitor/core';

import type { TextToStructurePlugin } from './definitions';

export class TextToStructureWeb
  extends WebPlugin
  implements TextToStructurePlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
