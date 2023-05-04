import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany
} from 'typeorm'
import { Schedule } from './schedules.entity'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'varchar', length: 45 })
  nome: string

  @Column({ type: 'varchar', length: 45, unique: true })
  email: string

  @Column({ type: 'boolean', default: false })
  admin: boolean

  @Column({ type: 'varchar', length: 120 })
  password: string

  @CreateDateColumn({ type: 'date' })
  createdAt: Date | string

  @UpdateDateColumn({ type: 'date' })
  updatedAt?: Date

  @DeleteDateColumn({ type: 'date' })
  deletedAt?: Date | null | undefined

  @OneToMany(() => Schedule, schedules => schedules.user)
  schedule: Schedule
}
