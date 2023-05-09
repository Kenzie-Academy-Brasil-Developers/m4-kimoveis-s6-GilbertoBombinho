import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm'
import { Address } from './addresses.entity'
import { Category } from './categories.entity'
import { Schedule } from './schedules.entity'

@Entity('real_estate')
export class RealEstate {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'boolean', default: false })
  sold: boolean

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  value: number | string

  @Column({ type: 'integer' })
  size: number

  @CreateDateColumn({ type: 'date' })
  createdAt: string | Date 

  @UpdateDateColumn({ type: 'date' })
  updatedAt: string | Date

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address

  @ManyToOne(() => Category, Category => Category.realEstate)
  category: Category

  @OneToMany(() => Schedule, Schedule => Schedule.realEstate)
  schedules: Schedule[]
}
