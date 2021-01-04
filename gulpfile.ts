import { src, dest, series, parallel, watch } from 'gulp';
import download from 'gulp-download';
import rename from 'gulp-rename';
import fs from 'fs';
import path from 'path';

export const downloadResources = async () => {

  const materialuiESlintFile = 'material-ui.eslintrc.js';

  if (fs.existsSync(path.join('.', materialuiESlintFile))) {
    console.log(`no-op: ${materialuiESlintFile} exists - exiting.`);
    return;
  }

  return download('https://raw.githubusercontent.com/mui-org/material-ui/master/.eslintrc.js')
    .pipe(rename(materialuiESlintFile))
    .pipe(dest('.'));
};
