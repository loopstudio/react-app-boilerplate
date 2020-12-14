const core = require('@actions/core');
const fs = require('fs');

try {
  // `coverage` input defined in action metadata file
  // const coverage = core.getInput('coverage_threshold');
  const coverageThreshold = 90;

  let coverageMap = [];
  let coverages = [];
  fs.readFile('action_coverage.txt', 'utf-8', (err, file) => {
    const lines = file.split('\n');
    coverageMap = lines[1].split('|');
    coverages = lines[3].split('|');

    let lowCovFlag = false;
    coverages.forEach((rawCoverage, index) => {
      const coverage = rawCoverage.trim();
      if (index > 0 && index < 5) {
        if (+coverage < coverageThreshold) {
          console.log(
            `${coverage} ${coverageMap[
              index
            ].trim()} lower than ${coverageThreshold}% <---`
          );
          lowCovFlag = true;
        } else {
          console.log(
            `${coverage} ${coverageMap[
              index
            ].trim()} higher than ${coverageThreshold}%`
          );
        }
      }
    });
    if (lowCovFlag) {
      core.setFailed('You may need to add more tests');
    }
  });
} catch (error) {
  core.setFailed(error.message);
}
