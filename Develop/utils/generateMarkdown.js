// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else if (license === "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "GNU GPLv3 License") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } 
};

// Add the license text to the README
const renderLicenseSection = (license, name) => {
  if(!license) {
    return "";
  } else if (license === "MIT License") {
  return `
  MIT License
  Copyright (c) 2022 ${name}
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  `;
  } else if (license === "GNU GPLv3 License") {
  return `
  Copyright (C) 2022 ${name}
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.
  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
  `;
  }
};

// Puts a link to the license
const renderLicenseLink = (license) => {
  if(!license) {
    return "";
  } else if (license === "MIT License") {
  return `
  [MIT License](https://choosealicense.com/licenses/mit/)
  `;
  }
  if(license === "GNU GPLv3 License") {
  return `
  [GNU GPLv3 License](https://choosealicense.com/licenses/gpl-3.0/)
  `;
  }
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)

## Description
${data.description}

## Technologies
${data.technologies}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license, data.name)}
${renderLicenseLink(data.license)}

## Tests
${data.tests}

## Contributing
${data.contributing}

## Questions
### Github: ${data.github}
### Email: ${data.email}
${data.questions}
`;
}

// connect to index.js
module.exports = generateMarkdown;