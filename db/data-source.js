require("reflect-metadata");
const { DataSource } = require("typeorm");
const ormconfig = require("../ormconfig");

const AppDataSource = new DataSource(ormconfig);

module.exports = { AppDataSource };
