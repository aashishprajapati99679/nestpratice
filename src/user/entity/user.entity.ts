import {
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn
} from 'typeorm';

import type { Relation } from 'typeorm';
import { Profile } from './profile.entity.js';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

   @OneToOne(() => Profile, (profile) => profile.user)
profile: Relation<Profile>;
}


// import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
// import { Profile } from './profile.entity.js';

// @Entity()
// export class User {
//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column()
//     name : string;

//     @Column({ unique : true })
//     email : string;

//     @OneToOne(() => Profile , (profile) => profile.user)
//     profile : Profile;
    
// }