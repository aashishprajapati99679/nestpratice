import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity.js";
import { PropertyFeature } from "./propertyFeature.entity.js";
import { PropertyType } from "./propertyType.entity.js";

@Entity()
export class Property {
    @PrimaryGeneratedColumn()
    id : number;

    @Column( {type: 'varchar', length: 255} )
    name : string;

    @Column( {type: 'text'} )
    description : string;

    @Column({type: 'numeric', precision: 10, scale: 2, default: 0})
    price : number;

    @OneToOne(() => PropertyFeature , (propertyFeature) => propertyFeature.property , {cascade : true})
    propertyFeature : PropertyFeature;

    @ManyToOne(() => User , (user)=> user.properties)
    @JoinColumn( {name : 'ownerId'})
    user : User;

    @ManyToMany(() => User , (user)=> user.likeProperty)
    likedByUsers : User[];

    @ManyToOne(() => PropertyType)
    type : PropertyType;
    
}