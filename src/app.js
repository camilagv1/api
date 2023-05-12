import express from "express";
import morgan from "morgan";

// ROUTES
import languageRoutes from "./routes/language.routes";

const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));// listado de las peticiones que hacemos
app.use(express.json());
// routes
app.use("/api/languages",languageRoutes);
export default app;