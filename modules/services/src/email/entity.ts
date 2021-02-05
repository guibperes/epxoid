import { Entity, Column } from 'typeorm';

import { BaseEntity } from '../base';

@Entity()
export class Email extends BaseEntity {
  @Column()
  subject!: String;

  @Column()
  body!: String;
}
