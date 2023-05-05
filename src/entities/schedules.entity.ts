import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne
} from 'typeorm'
import { User } from './user.entity'
import { RealEstate } from './real_estate.entity'

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'date' })
  date: Date

  @Column({ type: 'time' })
  hour: Date

  @ManyToOne(() => User, User => User.schedule)
  user: User

  @ManyToOne(() => RealEstate, RealEstate => RealEstate.schedules)
  realEstate: RealEstate
}
