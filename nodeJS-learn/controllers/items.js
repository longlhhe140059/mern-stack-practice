import { body, validationResult } from "express-validator"
import HttpStatusCode from "../exceptions/HttpStatusCode.js"

const getAllItem = async (req, res) => {
  res.status(HttpStatusCode.OK).json({
    message: "get all student",
    data: [
      {
        name: "book",
        description: "use to read",
      },
      {
        name: "pen",
        description: "use to write",
      },
    ],
  });
};

const getItemById = async (req, res) => {};

const updateItemById = async (req, res) => {};

const insertItemById = async (req, res) => {};

export default {
  getAllItem,
  getItemById,
  updateItemById,
  insertItemById,
};
