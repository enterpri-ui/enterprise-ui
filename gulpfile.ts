import { src, dest, series, parallel, watch } from 'gulp';
import download from 'gulp-download';
import rename from 'gulp-rename';

export const downloadResources = async () => {

  const materialuiESlintFile = 'material-ui.eslintrc.js';

  return download('https://raw.githubusercontent.com/mui-org/material-ui/master/.eslintrc.js')
    .pipe(rename(materialuiESlintFile))
    .pipe(dest('.'));
};
