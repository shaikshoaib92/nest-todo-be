import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }


  @Get('display-data')
  displayData(): string[] {
    return this.todoService.displayingData()
  }

  @Post('create-task')
  createTask(@Body() task: string) {
    return this.todoService.createTask(task);

  }

}
