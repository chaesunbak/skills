#!/usr/bin/env node
const os = require('os');

function checkSpecs() {
  const cpus = os.cpus().length;
  const memoryGB = Math.round(os.totalmem() / (1024 ** 3));

  console.log('=== System Specifications ===');
  console.log(`CPU Cores: ${cpus}`);
  console.log(`Total Memory: ${memoryGB} GB\n`);

  console.log('=== Playwright Worker Recommendation ===');
  if (cpus <= 4 || memoryGB <= 8) {
    console.log('Normal/Average Specs detected.');
    console.log('-> Recommendation: Use 1 worker (workers: 1) for stability.');
  } else if (cpus <= 8 || memoryGB <= 16) {
    console.log('Good Specs detected.');
    console.log('-> Recommendation: You can safely use up to 2-3 workers.');
  } else {
    console.log('High-end Specs detected.');
    console.log(`-> Recommendation: You can scale up to ${Math.floor(cpus / 2)} workers.`);
    console.log('Note: Using too many workers can sometimes cause flaky tests.');
  }
}

checkSpecs();
