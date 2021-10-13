import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Account {

  @PrimaryKey({ columnType: 'uuid' })
  accountId!: string;

  @Property({ columnType: 'text' })
  fullName!: string;

  @Property({ columnType: 'text' })
  email!: string;

  @Property({ columnType: 'text' })
  password!: string;

}
