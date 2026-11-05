import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity.js";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({type: 'varchar', length: 255})
    firstName : string;

    @Column({type: 'varchar', length: 255})
    lastName : string;

    @Column({type: 'varchar', length: 255})
    avatarUrl : string;

    @CreateDateColumn({type : 'timestamp'})
    createdAt : Date;

    @OneToMany(()=> Property , (property) => property.user)
    properties : Property[];

    @ManyToMany(()=> Property , (property) => property.likedByUsers)
    @JoinTable({ name : 'user_liked_properties'})
    likeProperty : Property[]; 
}