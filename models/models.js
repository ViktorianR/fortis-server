const { DataTypes } = require('sequelize');

const sequelize = require('../db');

const Coach = sequelize.define('coach', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    fname: { type: DataTypes.STRING, allowNull: false },
    level: { type: DataTypes.STRING, allowNull: false },
    about: { type: DataTypes.STRING },
});

const Discipline = sequelize.define('discipline', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING },
});

const Page = sequelize.define('page', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING },
});

const CoachDiscipline = sequelize.define('coach_discipline', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});


Coach.belongsToMany(Discipline, { through: CoachDiscipline });
Discipline.belongsToMany(Coach, { through: CoachDiscipline });

module.exports = {
    Page,
    Coach,
    Discipline,
};