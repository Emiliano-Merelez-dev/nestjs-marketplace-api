import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Order } from './entities/order.entity';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Create a new order' })
  @ApiResponse({
    status: 201,
    description: 'Order created successfully',
    type: Order,
  })
  @ApiResponse({ status: 400, description: 'Bad request - Check your DTO' })
  @ApiResponse({ status: 401, description: 'Unauthorized - Token missing' })
  @Auth()
  create(@Body() createOrderDto: CreateOrderDto, @GetUser() user: User) {
    return this.ordersService.create(createOrderDto, user);
  }

  @Get()
  @Auth(ValidRoles.admin)
  findAll(@Query() paginationDto: PaginationDto) {
    return this.ordersService.findAll(paginationDto);
  }

  @Get('user-orders')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Get all orders for the authenticated user' })
  @ApiResponse({
    status: 200,
    description: 'List of orders retrieved',
    type: [Order],
  })
  @Auth()
  findByUser(@Query() paginationDto: PaginationDto, @GetUser() user: User) {
    return this.ordersService.findAllByUser(user, paginationDto);
  }

  @Get(':id')
  @Auth()
  findOne(@Param('id', ParseUUIDPipe) id: string, @GetUser() user: User) {
    return this.ordersService.findOne(id, user);
  }

  @Patch(':id')
  @Auth()
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateOrderDto: UpdateOrderDto,
    @GetUser() user: User,
  ) {
    return this.ordersService.update(id, updateOrderDto, user);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin)
  remove(@Param('id', ParseUUIDPipe) id: string, @GetUser() user: User) {
    return this.ordersService.remove(id, user);
  }
}
