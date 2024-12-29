export class VacanyModel {
    title: string;
    description :string;
    publisherName :string;
    publisherPhoto :string;
    vacancyPhoto: string;
    jobDescription : string;
    price : number;

    constructor(
         title: string,
         vacancyPhoto:string, 
         description: string,
         jobDescription : string,
         publisherName: string,
         publisherPhoto: string,
        price : number,
        ) {
      this.title = title;
      this.description = description;
      this.jobDescription = jobDescription;
      this.publisherName = publisherName;
      this.publisherPhoto = publisherPhoto;
      this.vacancyPhoto = vacancyPhoto;
      this.price = price
    }
  }
  export const vacanyList: VacanyModel[] = [];
  