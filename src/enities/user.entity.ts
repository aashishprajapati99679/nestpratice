import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entity.js";
import { BeforeInsert } from "typeorm";
import * as bcrypt from 'bcrypt';

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

    @Column({type: 'varchar', length: 255, unique : true})
    email : string;

    @Column({type: 'varchar', length: 16})
    password : string;

    @OneToMany(()=> Property , (property) => property.user)
    properties : Property[];

    @ManyToMany(()=> Property , (property) => property.likedByUsers)
    @JoinTable({ name : 'user_liked_properties'})
    likeProperty : Property[]; 

    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password , 10);
    }
}