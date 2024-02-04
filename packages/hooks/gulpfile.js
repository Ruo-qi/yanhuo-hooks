const commonConfig = require('../../gulpfile');
const gulp = require('gulp');
const fs = require('fs');
const fg = require('fast-glob');
const gm = require('gray-matter');
const fse = require('fs-extra');

const getDesc = async (mdPath) => {
  if (!fs.existsSync(mdPath)) return;

  const mdFile = fs.readFileSync(mdPath, 'utf-8');
  const { content } = gm(mdFile);
  let description =
    (content.replace(/\r\n/g, '\n').match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m) || [])[1] || '';

  description = description.trim();
  description = description.charAt(0).toLowerCase() + description.slice(1);
  return description;
};

const getMetadata = async () => {
  const matedata = {
    functions: [],
  };

  const hooks = fg
    .sync('src/use*', {
      onlyDirectories: true,
    })
    .map((hook) => hook.replace('src/', ''))
    .sort();

  await Promise.allSettled(
    hooks.map(async (hook) => {
      const description = await getDesc(`src/${hook}/index.md`);
      return {
        name: hook,
        description,
      };
    }),
  ).then((res) => {
    matedata.functions = res.filter((r) => r.status === 'fulfilled').map((r) => r.value);
  });

  return matedata;
};

gulp.task('matedata', async () => {
  const matedata = await getMetadata();
  await fse.writeJson('matedata.json', matedata, { spaces: 2 });
});

exports.default = gulp.series(commonConfig.default, 'matedata');
