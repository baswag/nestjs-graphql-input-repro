import {
  Args,
  ID,
  ObjectType,
  Resolver,
  Field,
  ArgsType,
  Query,
  InputType,
  registerEnumType,
} from '@nestjs/graphql';

enum FilterType {
  EQUALS,
  CONTAINS,
  STARTSWITH,
}

registerEnumType(FilterType, { name: 'FilterType' });

@ArgsType()
class FilterInput {
  @Field((type) => FilterType)
  type: FilterType;

  @Field()
  field: string;

  @Field()
  value: string;
}

@ArgsType()
class MyQuery {
  @Field((type) => [FilterInput], { nullable: true })
  filter?: FilterInput[];
}

@ObjectType()
class TestObject {
  @Field((type) => ID)
  id: string;
}

@Resolver((of) => TestObject)
export class TestObjectResolver {
  @Query((returns) => TestObject)
  async testObject(@Args() args: MyQuery): Promise<TestObject> {
    return { id: 'test' };
  }
}
