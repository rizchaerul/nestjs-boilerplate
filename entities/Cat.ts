import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Account } from './Account';

@Entity()
export class Cat {

  @PrimaryKey()
  catId!: number;

  @ManyToOne({ entity: () => Account, fieldName: 'account_id' })
  accountId!: Account;

  @Property({ columnType: 'text' })
  name!: string;

}
