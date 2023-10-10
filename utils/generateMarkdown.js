// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  
  This project is using ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Usage](#usage)
  * [Questions](#questions)
  * [GitHub](#github)
  * [Email](#email)

  ## Desription

  ${data.description}

  ## Installation

  TO install dependencies run following commands:

  ${data.installation}

  ## Contributing

  ${data.contributing}

  ## Testing

  ${data.testing}

  ## Usage

  ${data.usage}

  ## Questiosn

  ${data.questiosn}

  ## GitHub

  ${data.github}

  ## Email

  ${data.email}
`;
}

module.exports = generateMarkdown;
