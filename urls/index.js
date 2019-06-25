'use strict'
const express = require('express')
const asyncify = require('express-asyncify')
const novTelematicas = require('./novTelematicas')

const url = asyncify(express.Router())

url.use('/Telematica',novTelematicas)

module.exports = url