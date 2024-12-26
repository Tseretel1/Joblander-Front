export class VacanyModel {
    title: string;
    description :string;
    publisherName :string;
    publisherPhoto :string;
    vacancyPhoto: string;
    jobDescription : string;

    constructor(
         title: string,
         vacancyPhoto:string, 
         description: string,
         jobDescription : string,
         publisherName: string,
         publisherPhoto: string,
        ) {
      this.title = title;
      this.description = description;
      this.jobDescription = jobDescription;
      this.publisherName = publisherName;
      this.publisherPhoto = publisherPhoto;
      this.vacancyPhoto = vacancyPhoto;
    }
  }
  export const vacanyList: VacanyModel[] = [];
  