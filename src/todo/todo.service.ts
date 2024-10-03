import { Injectable } from '@nestjs/common';
import { CreateTodoInput, UpdateTodoInput } from './todo.input';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) { }

  async findAll() {
    return this.prisma.todo.findMany();
  }

  async findOne(id: string) {
    return this.prisma.todo.findUnique({
      where: { id },
    });
  }

  async create(createTodoInput: CreateTodoInput) {
    const data: any = {
      title: createTodoInput.title,
      description: createTodoInput.description,
    };

    return this.prisma.todo.create({
      data,
    });
  }

  async update(data: UpdateTodoInput) {
    const { id, ...updateData } = data;
    return this.prisma.todo.update({
      where: { id },
      data: updateData,
    });
  }

  async delete(id: string) {
    return this.prisma.todo.delete({
      where: { id },
    });
  }
}
