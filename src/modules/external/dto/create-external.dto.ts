import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class OrderItems {
  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}

export class CreateExternalDto {
  @IsString()
  @IsNotEmpty()
  readonly terminal_id: string;

  @IsNumber()
  @IsNotEmpty()
  readonly order_number: number;

  @IsString()
  @IsNotEmpty()
  readonly customerName: string;

  @IsString()
  @IsNotEmpty()
  readonly customerPhone: string;

  @IsNumber()
  @IsNotEmpty()
  readonly toLat: number;

  @IsNumber()
  @IsNotEmpty()
  readonly toLon: number;

  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsString()
  readonly comment: string;

  @IsString()
  @IsNotEmpty()
  readonly payment_method: string;

  @IsNotEmpty()
  orderItems: OrderItems[];
}

export class PostOrderScoreDto {
  @IsNumber()
  @IsNotEmpty()
  order_id: number;

  @IsNumber()
  @IsNotEmpty()
  courier: number;
}
