#!/usr/bin/env node

const { run } = require('@dotplants/cli');
const config = require('../build/index.js');

run(config);
