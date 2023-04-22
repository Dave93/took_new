import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

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

  @IsString()
  @IsOptional()
  readonly delivery_schedule?: string;

  @IsString()
  @IsOptional()
  readonly later_time?: string;

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

export class PostOrderLocationChangeDto {
  @IsNumber()
  @IsNotEmpty()
  order_id: number;

  @IsNumber()
  @IsNotEmpty()
  lat: number;

  @IsNumber()
  @IsNotEmpty()
  lon: number;
}

export class PostOrderCancelDto {
  @IsNumber()
  @IsNotEmpty()
  order_id: number;
}

export class PostOrderTerminalChangeDto {
  @IsNumber()
  @IsNotEmpty()
  order_id: number;

  @IsString()
  @IsNotEmpty()
  terminal_id: string;
}

export class PostOrderCalculateCustomerPriceDto {
  @IsString()
  @IsNotEmpty()
  terminal_id: string;

  @IsNumber()
  @IsNotEmpty()
  toLat: number;

  @IsNumber()
  @IsNotEmpty()
  toLon: number;
}
