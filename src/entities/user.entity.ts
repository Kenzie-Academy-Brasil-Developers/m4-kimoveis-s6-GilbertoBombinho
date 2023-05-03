import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
class User {
@PrimaryGeneratedColumn('increment')
id: number;

@Column({ type: 'varchar', length: 45, nullable: false })
nome: string;

@Column({ type: 'varchar', length: 45, nullable: false, unique: true })
email: string;

@Column({ type: 'boolean', default: false })
admin: boolean;

@Column({ type: 'varchar', length: 120, nullable: false })
password: string;

@Column({ type: 'date', nullable: false })
createdAt: Date;

@Column({ type: 'date', nullable: false })
updatedAt: Date;

@Column({ type: 'date', nullable: true })
deletedAt?: Date | null | undefined;
}
export default User;