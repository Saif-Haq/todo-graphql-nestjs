import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';
import { CreateTodoInput, UpdateTodoInput } from './todo.input';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private todoService: TodoService) { }

  @Query(() => [Todo])
  async todos() {
    return this.todoService.findAll();
  }

  @Query(() => Todo, { nullable: true })
  async todo(@Args('id') id: string) {
    return this.todoService.findOne(id);
  }

  @Mutation(() => Todo)
  async createTodo(@Args('input') input: CreateTodoInput) {
    return this.todoService.create(input);
  }

  @Mutation(() => Todo)
  async updateTodo(@Args('input') input: UpdateTodoInput) {
    return this.todoService.update(input);
  }

  @Mutation(() => Todo)
  async deleteTodo(@Args('id') id: string) {
    return this.todoService.delete(id);
  }
}
