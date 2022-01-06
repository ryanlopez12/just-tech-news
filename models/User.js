const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const router = require('../routes/api/user-routes');

//create our User models
class User extends Model {}

//define table columns and configurations
User.init(
    {
        //define an id column
        id: {
            //use special Sequelize DataTypes objust provide what type of data it is
        type: DataTypes.INTEGER,
        //this is the equivalent of SQL's NOT NULL option
        allowNull: false,
        //instruct that this is the Primary Key
        primaryKey: true,
        //turn on auto-increment
        autoIncrement: true    
        },
    //define a username column
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //define an email column
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        //there cannot be any duplicate email valuies in this TABLe
        unique: true,
        //if allowNull is set to false, we can run ouir data through validator
        validate: {
            isEmail: true
        }
    },
    //define a password column 
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            //this means the password must be at least four characters long
            len: [4]
        }
    }
    },
    {
        //TABLE CONFIGURATION OPTIONS GO HERE 
        // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: 'user'
  }
);

//GET /api/users


//GET /api/users/1


//POST /api/users


module.exports = User;
    
