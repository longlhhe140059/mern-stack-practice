import { body, validationResult } from "express-validator";

const getAllItem = async (req, res) => {
  res.status(200).json({
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
