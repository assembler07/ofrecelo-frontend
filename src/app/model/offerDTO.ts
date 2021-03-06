import { Coordinates } from './coordinates';

export class OfferDTO {
    public id: String;
    public title: string;
    public coordinates: Coordinates;
    public offerFile: File;
    public file: string;
    public description: string; 
    public location: string;
    public offerType: string;
}