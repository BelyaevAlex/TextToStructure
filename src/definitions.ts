export interface TextToStructurePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
