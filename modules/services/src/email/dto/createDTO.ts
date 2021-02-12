import { Length, IsNotEmpty, IsNotEmptyObject } from 'class-validator';

import { EmailAddress } from '../entity';

export class EmailCreateDTO {
  @Length(3, 255)
  @IsNotEmpty()
  subject!: String;

  @Length(3, 255)
  @IsNotEmpty()
  body!: String;

  @IsNotEmptyObject()
  from!: EmailAddress;

  @IsNotEmptyObject()
  to!: EmailAddress;

  constructor(
    subject: String,
    body: String,
    from: EmailAddress,
    to: EmailAddress
  ) {
    this.subject = subject;
    this.body = body;
    this.from = from;
    this.to = to;
  }

  static of(bodyObject: EmailCreateDTO) {
    return new EmailCreateDTO(
      bodyObject.subject,
      bodyObject.body,
      bodyObject.from,
      bodyObject.to
    );
  }
}
