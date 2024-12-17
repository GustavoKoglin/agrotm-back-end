import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type DriverDocument = HydratedDocument<Driver>;

@Schema()
export class Driver {
  @Prop()
  name: string;

  @Prop()
  cpf: string;

  @Prop()
  birthDate: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  cnhNumber: string;

  @Prop()
  cnhCategory: string;

  @Prop()
  antt: string;

  @Prop()
  anttValidity: string;

  @Prop()
  vehicleType: string;

  @Prop()
  vehicleBrand: string;

  @Prop()
  vehicleYear: string;

  @Prop()
  vehiclePlate: string;

  @Prop()
  experience: string;

  @Prop()
  workingAreas: string;

  @Prop()
  availability: string;

  @Prop()
  notes: string;
}

export const DriverSchema = SchemaFactory.createForClass(Driver);
