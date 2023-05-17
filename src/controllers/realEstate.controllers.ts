import { Request, Response } from 'express'
import { createRealEstateService } from '../services/real-estate/createRealEstate.service'
import { listRealEstateService } from '../services/real-estate/listTRealEstate.service'

export const createRealEstateController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const realEstateData = request.body
  const newRealEstate = await createRealEstateService(realEstateData)
  return response.status(201).json(newRealEstate)
}

export const listRealEstateController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const realEstate = await listRealEstateService()
  return response.json(realEstate)
}
