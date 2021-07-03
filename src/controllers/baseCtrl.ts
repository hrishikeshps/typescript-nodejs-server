import { NextFunction, Request, Response } from "express";

// Only a base controller has been initialised
// We can further use this as an extension to the other main controllers

class BaseCtrl {
  model: any;

  // Return Test JSON
  getTestData = async (req: Request, res: Response) => {
    try {
      const resObject = {
        route: "/api/test",
        status: "success",
      };
      res.status(200).json(resObject);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };
}

export default BaseCtrl;
