import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { Property } from "./property.entity.js";

@Entity()
export class PropertyFeature {
    @PrimaryGeneratedColumn({})
    id : number;

    @Column({ type: "int" })
    bedrooms : number;
    
    @Column({ type: "int" })
    bathrooms : number;

    @Column({ type: "int" })
    parkingSpots : number;

    @Column({ type: "numeric", precision: 10, scale: 2 })
    area : number;

    @Column({ type: "boolean" })
    hasSwimmingPool : boolean;

    @Column({ type: "boolean" })
    hasGarden : boolean;

    @Column({ type: "boolean" })
    hasBalcony : boolean;

    @OneToOne(()=> Property  , (property) => property.propertyFeature)
    @JoinColumn()
    property : Relation<Property>;

}