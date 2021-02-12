import { Entity, Column } from 'typeorm';
import { Length, IsEmail, IsNotEmpty, IsNotEmptyObject } from 'class-validator';

import { BaseEntity } from '../base';
import { EmailCreateDTO } from './dto';

export class EmailAddress {
  @Column()
  @Length(3, 80)
  @IsNotEmpty()
  name!: String;

  @Column()
  @Length(3, 80)
  @IsEmail()
  @IsNotEmpty()
  email!: String;
}
@Entity()
export class Email extends BaseEntity {
  @Column()
  @Length(3, 255)
  @IsNotEmpty()
  subject!: String;

  @Column()
  @Length(3, 255)
  @IsNotEmpty()
  body!: String;

  @Column(() => EmailAddress)
  @IsNotEmptyObject()
  from!: EmailAddress;

  @Column(() => EmailAddress)
  @IsNotEmptyObject()
  to!: EmailAddress;

  private constructor(
    subject: String,
    body: String,
    from: EmailAddress,
    to: EmailAddress
  ) {
    super();

    this.subject = subject;
    this.body = body;
    this.from = from;
    this.to = to;
  }

  static of(emailCreateDTO: EmailCreateDTO): Email {
    return new Email(
      emailCreateDTO.subject,
      emailCreateDTO.body,
      emailCreateDTO.from,
      emailCreateDTO.to
    );
  }
}
