import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsEnum,
  IsArray,
} from 'class-validator';
import { Country } from 'types/country';

export class SignUpAccount {
  @ApiProperty({ example: 'Toni' })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Da Rodda' })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({ example: 'toni.da.rodda.pro@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '+330678400302' })
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @ApiProperty({ example: 'po9@cQesP!!D(' })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ example: [Country.CANADA] })
  @IsArray()
  @IsEnum(Country, { each: true })
  country: Country;
}
