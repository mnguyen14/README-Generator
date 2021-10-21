//TODO: Create a function that returns a license badge based on which license is passed in

const renderLicenseBadge = (license) => {
  let licenseMarkdownText;
  switch (license) {
    case 'MIT':
      licenseMarkdownText = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'GNU':
      licenseMarkdownText = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'Apache':
      licenseMarkdownText = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'None':
      licenseMarkdownText = ''
    }
  return licenseMarkdownText
}
  
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
  
# ${data.title}

# Table of Content
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contact](#Contact)
[Contribution](#Contribution)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}

## Contact
github.com/${data.github}
Email: ${data.email}

## Contribution
${data.contribution}`;
}

module.exports = generateMarkdown;