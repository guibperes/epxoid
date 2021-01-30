interface EmailAddress {
  name: string;
  email: string;
}

export interface EmailDTO {
  from: EmailAddress;
  to: EmailAddress;
  subject: string;
  body: string;
}
