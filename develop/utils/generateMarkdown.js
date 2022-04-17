
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    return '[![License: MIT](https://img.shields.io/badge/License-Apache_2-blue.svg)]';
  }
  if (license === 'GNU General Public License') {
    return '[![License: MIT](https://img.shields.io/badge/License-GNU-orange.svg)]';
  }
  if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  }
  if (license === 'Creative Commons Zero Universal') {
    return '[![License: MIT](https://img.shields.io/badge/License-Creative_Commons-red.svg)]';
  }
  if (license === 'Eclipse Public License 2.0') {
    return '[![License: MIT](https://img.shields.io/badge/License-Eclipse_2-green.svg)]';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(projectData) {
  return `# ${projectData.project_title}

  #### Table of Contents
    1. [Project Description](#project-description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Contributing](#contributing)
    6. [Test](#test)
    7. [License](#license)
    8. [Contact](#contact)
  
  
  #Project Description
  * ${projectData.description}

  #Installation
  * ${projectData.install}

  #Usage
  * ${projectData.use}

  #Contributing
  * ${projectData.contributions}

  #Test
  * ${projectData.test}

  #License
    ${renderLicenseBadge(projectData.license)}
  
  #Contact
  * GitHub Username: ${projectData.github}
  * GitHub Profile: http://github.com/${projectData.github} 
  * Email Address: ${projectData.email}
`};

module.exports = generateMarkdown;
