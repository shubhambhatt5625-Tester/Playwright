import fs from 'fs';
import path from 'path';
import YAML from 'yaml';
import { LoginDataRow } from './testData';

export function readYAML(filePath: string): LoginDataRow[] {
    const content = fs.readFileSync(path.resolve(filePath), 'utf8');
    return YAML.parse(content) as LoginDataRow[];
}
