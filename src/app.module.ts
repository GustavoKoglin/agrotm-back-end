import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DriversModule } from "./drivers/drivers.module";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      "mongodb+srv://atendimento:99zgcD2azicHgb0n@cluster0.kinp1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    ),
    AuthModule,
    DriversModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
