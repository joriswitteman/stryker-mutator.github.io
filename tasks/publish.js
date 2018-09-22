const { EOL } = require('os');
const { exec } = require('child_process');
const ncp = require('ncp').ncp;
const path = require('path');
const rimraf = require('rimraf');
ncp.limit = 16;

const PUBLISH_REQUIREMENTS = {
  branch: 'develop'
}

function sh(command) {
  return new Promise((res, rej) => {
    log(command);
    exec(command, { encoding: 'utf8' }, (err, stdout) => {
      if (err) {
        rej(err);
      } else {
        res(stdout.trim());
      }
    });
  });
}

function copy(from, to) {
  log(`Copying ${from}...`);
  return new Promise((res, rej) => {
    ncp(from, to, function (err) {
      if (err) {
        return rej(err);
      } else {
        res();
      }
    });
  });
}

function rm(glob) {
  log(`rm ${glob}`);
  return new Promise((res, rej) => {
    rimraf(glob, err => {
      if (err) {
        rej(err);
      } else {
        res();
      }
    });
  });
}

function log(message) {
  console.log(`Publish: ${message}`);
}

async function publish() {
  const desiredCwd = path.resolve(__dirname, '..');
  if (process.cwd() !== desiredCwd) {
    log(`Please run from ${desiredCwd}`)
  } else {
    const branch = await sh('git rev-parse --abbrev-ref HEAD');
    if (branch !== PUBLISH_REQUIREMENTS.branch) {
      log(`Current branch ${branch} !== ${PUBLISH_REQUIREMENTS.branch}, skipping website publish`);
    } else {
      log(`Current branch ${branch} OK, proceeding`);
      const gitStatus = await sh('git status --short');
      if (gitStatus) {
        throw new Error(`Working directory is not clean${EOL}${gitStatus}`);
      }
      await sh('npx grunt build');
      await sh('git checkout master');
      await copy('root', '.');
      await copy('generated-root', '.');
      await rm('.@(bithoundrc|editorconfig)');
      await rm('@(src|generated-root|root)');
      await rm('@(package.json|package-lock.json|webpack.config.js|Gruntfile.js)');
      await sh('git add .');
      await sh('git commit -m "Publish"');
      await sh('git push');
    }
  }
}

publish()
  .then(() => console.log('Publish done'))
  .catch(error => console.error(`Publish failed ${error}`))

