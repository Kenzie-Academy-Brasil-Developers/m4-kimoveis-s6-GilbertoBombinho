import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
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

  @ManyToOne(() => User, user => user.schedule)
  user: User

  @ManyToOne(() => RealEstate, realEstate => realEstate.schedules)
  realEstate: RealEstate
}
