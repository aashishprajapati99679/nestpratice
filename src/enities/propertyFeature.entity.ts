import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { Property } from "./property.entity.js";

@Entity()
export class PropertyFeature {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    bedrooms : number;
    
    @Column()
    bathrooms : number;

    @Column()
    parkingSpots : number;

    @Column()
    area : number;

    @Column()
    hasSwimmingPool : boolean;

    @Column()
    hasGarden : boolean;

    @Column()
    hasBalcony : boolean;

    @OneToOne(()=> Property  , (property) => property.propertyFeature)
    @JoinColumn()
    property : Relation<Property>;

}