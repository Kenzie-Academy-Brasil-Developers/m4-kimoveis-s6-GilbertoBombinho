import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
import { User } from './user.entity';


@Entity('schedules')
export class Schedule {
@PrimaryGeneratedColumn('increment')
id: number;

@Column({ type: 'date', nullable: false })
date: Date;

@Column({ type: 'time', nullable: false })
hour: Date;

@ManyToOne(()=> User)
user: User

}

