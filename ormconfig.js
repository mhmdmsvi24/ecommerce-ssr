module.exports = {
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 8001,
    username: process.env.DB_USER || "user",
    password: process.env.DB_PASS || "password",
    database: process.env.DB_NAME || "ecommerce-ssr-db",
    synchronize: true,
    logging: true,
    migrations: ["./migration/**/*.ts"],
    entities: ["./schemas/**/*.js"],
    cli: {
        migrationsDir: "src/migration"
    }
};
