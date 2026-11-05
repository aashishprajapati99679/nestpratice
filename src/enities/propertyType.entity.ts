import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PropertyType {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({type: 'varchar', length: 255})
    value : string;
}