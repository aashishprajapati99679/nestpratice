import {
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
    JoinColumn
} from 'typeorm';

import type { Relation } from 'typeorm';
import { User } from './user.entity.js';

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    age: number;

    @Column()
    phone: string;

   @OneToOne(() => User, (user) => user.profile)
@JoinColumn()
user: Relation<User>;
}





// import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
// // import { User } from "./user.entity.js";
// import { User } from "./user.entity.js";

// @Entity()
// export class Profile {
//     @PrimaryGeneratedColumn()
//     id : number;

//     @Column()
//     age : number;

//     @Column()
//     phone : string;

//     @OneToOne(() => User , (user)=> user.profile)
//     user : User;
// }