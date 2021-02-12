import { Request, Response } from 'express';
import { EmailService } from '@epxoid/services';

export class EmailController {
  constructor(private service: EmailService) {}

  public async findAll(req: Request, res: Response) {
    const response = await this.service.findAll();

    return res.json(response);
  }
}
