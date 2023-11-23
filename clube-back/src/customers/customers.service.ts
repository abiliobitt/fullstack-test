import { Body, Get, Injectable, Param, ParseUUIDPipe, Patch, Put } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Customer } from './schemas/customer.schema';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(@InjectModel(Customer.name) private customerModel: Model<Customer>) { }

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const createdCustomer = new this.customerModel(createCustomerDto);
    return createdCustomer.save();
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.find().exec();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<Customer> {
    return this.customerModel.findById(id);
  }
  
  @Put()
  async update(@Body('_id') id: string, @Body() updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
    return this.customerModel.findByIdAndUpdate(id, updateCustomerDto);
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
