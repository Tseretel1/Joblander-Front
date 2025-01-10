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
  
  export class CompanyModel {
    companyName: string;
    logo :string;

    constructor(
        companyName: string,
        logo: string,
        ) {
      this.companyName = companyName;
      this.logo = logo;
    }
  }
  export const companyList: CompanyModel[] = [];
  