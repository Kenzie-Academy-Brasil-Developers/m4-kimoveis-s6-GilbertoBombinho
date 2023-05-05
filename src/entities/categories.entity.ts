import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany
} from 'typeorm'
import { RealEstate } from './real_estate.entity'

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'varchar', length: 45, unique: true })
  name: string

  @OneToMany(() => RealEstate, RealEstate => RealEstate.category)
  realEstate: RealEstate[]
}
