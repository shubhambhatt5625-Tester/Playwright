import fs from 'fs';
import path from 'path';
import * as XLSX from 'xlsx';
import { LoginDataRow } from './testData';

export function readXLSX(filePath: string): LoginDataRow[] {
    const workbook = XLSX.read(fs.readFileSync(path.resolve(filePath)), { type: 'buffer' });
    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
    return XLSX.utils.sheet_to_json<LoginDataRow>(firstSheet, { defval: '' });
}
