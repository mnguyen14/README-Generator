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

  return `# ${data.projectTitle}

# Table of Content
1. [Title](#Title)
2. [Description](#Description)
3. [License](#License)
4. [Installation](#Installation)
5. [Tests](#Tests)
6. [Usage](#Usage)
7. [Contribution](#Contribution)
8. [Github](#Github)
9. [E-mail](#Email)  

## Title
${data.Title}

## Description
${data.description}

## License
${renderLicenseBadge(data.license)}

## Installation
${data.installation}

## Tests
${data.tests}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Github
${data.github}

## E-mail
${data.email}`;
}

module.exports = generateMarkdown;