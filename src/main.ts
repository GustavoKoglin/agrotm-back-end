import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ExpressAdapter } from "@nestjs/platform-express";
import * as express from "express";
import { Server } from "http";

const server = express();

let appInstance: Server;

export default async function handler(req: any, res: any) {
  if (!appInstance) {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

    app.enableCors({
      origin: [
        "https://agrotm-devmichaelhemings-projects.vercel.app",
        "https://agrotm-dashboard.vercel.app",
        "http://localhost:3000",
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Accept", "Content-Type", "Authorization"],
      preflightContinue: false,
    });

    await app.init();
    appInstance = server.listen();
  }

  server(req, res); // Encaminha as requisições para o Express
}
