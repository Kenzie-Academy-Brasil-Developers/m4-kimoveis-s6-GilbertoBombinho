import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('real_estate')
export class RealEstate {
@PrimaryGeneratedColumn('increment')
id: number;

@Column({ type: 'boolean', default: false })
sold: boolean;

@Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
value: number;

@Column({ type: 'integer', nullable: false })
size: number;

@Column({ type: 'date', nullable: false })
createdAt: Date;

@Column({ type: 'date', nullable: false })
updatedAt: Date;
}







