DROP DATABASE IF EXISTS `socialrent_db`;

CREATE DATABASE `socialrent_db`;

--- 1a. Set Up Sequelize index.js and folders
` node_modules/.bin/sequelize init `

--- 1b. Create models:
` node_modules/.bin/sequelize init:models --name user`
` node_modules/.bin/sequelize init:models --name advertiser`

--- 2a. Create a seed file for both (up and down entries were done manually...)
` node_modules/.bin/sequelize seed:generate --name users `
` node_modules/.bin/sequelize seed:generate --name advertisers `

--- 2b. Create a migrations files for both (up and down entries were done manually...)
` node_modules/.bin/sequelize migration:generate --name users `
` node_modules/.bin/sequelize migration:generate --name advertisers `

--- 3a. Run migration to get it into MySQL database (entries were added manaully...)
` node_modules/.bin/sequelize db:migrate `

--- 3b. Run the Database seeder file
` snode_modules/.bin/sequelize db:seed:all `

--- 4b. Run migration to get it into MySQL database (entries were added manaully...)
` node_modules/.bin/sequelize db:migrate `
