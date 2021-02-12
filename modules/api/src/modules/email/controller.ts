import { Request, Response } from 'express';
import { EmailService, EmailCreateDTO } from '@epxoid/services';

const findAll = async (req: Request, res: Response) => {
  const response = await EmailService.findAll();

  return res.json(response);
};

const save = async (req: Request, res: Response) => {
  const emailCreateDTO = EmailCreateDTO.of(req.body);
  const response = await EmailService.save(emailCreateDTO);

  return res.json(response);
};

export const EmailController = { findAll, save };
