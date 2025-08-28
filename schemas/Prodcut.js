const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Product",
    tableName: "products",
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true,
        },
        name: {
            type: "varchar",
            length: 64,
            nullable: false
        },
        desc: {
            type: "varchar",
            length: 255,
            nullable: false
        },
        img: {
            type: "varchar",
            nullable: true
        },
        rating: {
            type: "decimal",
            default: 0
        },
        price: {
            type: "decimal",
            precision: 10,
            scale: 2,
            nullable: false
        },
        featured: {
            type: "boolean",
            default: false
        },
        available: {
            type: "boolean",
            default: false
        },
        remaining: {
            type: "int",
            default: 0
        },
        discount: {
            type: "decimal",
            precision: 5,
            scale: 2,
            default: 0.00
        },
        color: {
            type: "varchar",
            nullable: false
        },
        size: {
            type: "enum",
            enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
            nullable: false
        },
        sku: {
            type: "varchar",
            length: 32,
            unique: true,
            nullable: false
        },
        created_at: {
            type: "timestamp",
            createDate: true,
            default: () => "CURRENT_TIMESTAMP"
        },
        updated_at: {
            type: "timestamp",
            updateDate: true,
            default: () => "CURRENT_TIMESTAMP"
        }
    },
});
