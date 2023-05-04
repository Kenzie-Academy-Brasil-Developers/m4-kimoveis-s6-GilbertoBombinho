import { Request, Response } from 'express'

export const createVisitController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  return response.json()
}

export const listVisitsController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  return response.json()
}