const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");
const bcrypt = require("bcrypt");

const User = sequelize.define("user", {
    fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "ad soyad girmelisiniz"
            },
            isFullname(value) {
                if(value.split(" ").length < 2) {
                    throw new Error("Lütfen ad ve soyad bilginizi giriniz.");
                }
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: "email daha önce alınmış"
        },
        validate: {
            notEmpty: {
                msg: "email girmelisiniz"
            },
            isEmail: {
                msg: "email olmalıdır."
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "parola boş geçilemez"
            },
            len: {
                args: [5, 10],
                msg: "parola 5-10 karakter uzunluğunda olmalıdır."
            }
        }
    },
    resetToken: {
        type: DataTypes.STRING,
        allowNull: true
    },
    resetTokenExpiration: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, { timestamps: true});

User.afterValidate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
});

module.exports = User;