import Sequelize from "sequelize";
import { connection } from "../db/connection.js";

export const filmes = connection.define(
  "filmes",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nome_filme: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    diretor: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    sinopse: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ano: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    duracao: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    img: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    iframe: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  }
);

const initTable = async () => {
  try {
    await filmes.sync();
  } catch (error) {
    return error.message
  }
 
}

initTable();
