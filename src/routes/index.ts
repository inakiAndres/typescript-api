import express from "express";

import immflyRouter from "./immfly";

const setRoutes = (app: express.Express) => {
  app.use("/api/immfly", immflyRouter);
};

export default setRoutes;
