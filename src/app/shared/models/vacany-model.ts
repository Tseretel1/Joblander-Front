export class VacanyModel {
    title: string;
    description :string;
    publisherName :string;
    publisherPhoto :string;
    jobDescription : string;
    price : number;
    location :string;
    constructor(
         title: string,
         description: string,
         jobDescription : string,
         publisherName: string,
         publisherPhoto: string,
         location :string,
         price : number,
        ) {
      this.title = title;
      this.description = description;
      this.jobDescription = jobDescription;
      this.publisherName = publisherName;
      this.publisherPhoto = publisherPhoto;
      this.price = price,
      this.location = location
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
  