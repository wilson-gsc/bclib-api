import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Status } from "src/enums/status.enum";

@Entity()
export class Author extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true })
    full_name: string;
    
    @Column()
    number: number

    @Column({ type: "enum", enum: Status, default: Status.ENABLED })
    status: Status;

    @Column()
    @CreateDateColumn()
    created_at: Date;

    @Column()
    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    created_by: string;

    @Column()
    updated_by: string;
}