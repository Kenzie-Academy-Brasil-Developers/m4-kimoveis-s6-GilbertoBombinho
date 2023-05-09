import { Request, Response } from 'express'
//import { listRealEstateService } from '../services/real-estate/listTRealEstate.service'
import { TRealEstate } from '../interfaces/realEstate.interface'
import { createRealEstateService } from '../services/real-estate/createRealEstate.service'

export const createRealEstateController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const realEstateData = request.body
  const newRealEstate = await createRealEstateService(realEstateData)
  return response.status(201).json(newRealEstate)
}

// export const listImmobileController = async (
//   request: Request,
//   response: Response
// ): Promise<Response> => {
//   const immobile = await listImmobileService()
//   return response.json()
// }