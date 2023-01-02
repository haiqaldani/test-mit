module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define(
    "Note",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Name is required",
          },
        },
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Address is required",
          },
        },
      },
      phoneNumber: {
        type: DataTypes.STRING(13),
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Phone Number is required",
          },
          len: {
            args: [10,13],
            msg: "Phone Number must be 10 to 13 digits",
          }
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Note is required",
          },
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "notes",
      timestamps: true,
    }
  );

  return Note;
};
