import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('users')
export class User {
@PrimaryGeneratedColumn('increment')
id: number;

@Column({ type: 'varchar', length: 45 })
nome: string;

@Column({ type: 'varchar', length: 45, unique: true })
email: string;

@Column({ type: 'boolean', default: false })
admin: boolean;

@Column({ type: 'varchar', length: 120 })
password: string;

@CreateDateColumn({ type: 'date' })
createdAt: Date | string;

@CreateDateColumn({ type: 'date' })
updatedAt: Date;

@CreateDateColumn({ type: 'date' })
deletedAt?: Date | null | undefined;
}
