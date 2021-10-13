const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//create our user model
class User extends Model {}

//define table colums and configuration
User.init(
    {
        //define an id column
        id: {
            //use th special sequalize datatyped object provide what type of data it is 
            type: DataTypes.INTEGER,
            //this is the equiv of sqls not null option
            allowNull: false,
            //instruct that this is the primary key
            primaryKey: true,
            //turn on auto increment 
            autoIncrement: true
        },
        //define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //define an email colums
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            //there cannot be any duplicate emails
            unique: true,
            //if allownull is set to galse we can run out data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        //defiine a password colums 
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validae: {
                //the password must be atlesst 4 characters long
                len: [4]
            }
        }
    },
    {
        //table configs options go here
        //pass in out impoted sequelize connection 
        sequelize,
        //dont automaticcally create createdAT/updatedAT timestamp fields
        timestamps: false,
        //dont pluralize name of database table
        freezeTableName: true,
        //use underscores instead on came-casing
        underscored: true,
        //make it so our model name stays lowecase 
        modelName: 'user'
    }
);