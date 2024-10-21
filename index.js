const core = require('@actions/core');
const fs = require('fs');
const path = require('path');

async function run() {
  try {
    const filePaths = core.getMultilineInput('file-paths');

    filePaths.forEach(file => {
      const filePath = path.resolve(file.trim());

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`Deleted: ${filePath}`);
      } else {
        console.log(`File not found: ${filePath}`);
      }
    });
  } catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

run();
