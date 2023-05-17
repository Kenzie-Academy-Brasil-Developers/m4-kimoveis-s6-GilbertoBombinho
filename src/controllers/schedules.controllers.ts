import { Request, Response } from 'express'

import { listScheduleService } from '../services/schedules/listSchedules.service'
import { createScheduleService } from '../services/schedules/createSchedules.service'

export const createSchedulesController = async (
  request: Request,
  response: Response,
): Promise<Response> => {
  const id = response.locals.token.id
  const scheduleData = request.body
  const newSchedule = await createScheduleService(scheduleData, id)
  return response.status(201).json(newSchedule)
}

export const listSchedulesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const realEstateId = Number(request.params.id) 
  const schedules = await listScheduleService(realEstateId)
  return response.json(schedules)
}