// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
![License](https://img.shields.io/badge/license-${data.license}-lightgrey.svg)

# Table of Contents
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contribution](#Contribution)
[Tests](#Tests)
[Questions](#Questions)

# Description
${data.description}

# Installation
${data.installation}

# Usage
${data.usage}

# License
This sofware is published under the ${data.license} license.

# Contribution

${data.contribution}

# Tests

${data.testing}

# Questions

If you have any questions regarding this sofware, contact me through 
[GitHub](https://github.com/${data.gitHub}) or via [Email](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
