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
  value: number

  @Column({ type: 'integer' })
  size: number

  @CreateDateColumn({ type: 'date' })
  createdAt: Date

  @UpdateDateColumn({ type: 'date' })
  updatedAt: Date

  @OneToOne(() => Address, address => address.realEstate)
  @JoinColumn()
  address: Address

  @ManyToOne(() => Category, category => category.realEstate)
  category: Category

  @OneToMany(() => Schedule, schedule => schedule.realEstate)
  schedules: Schedule[]
}
