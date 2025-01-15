export interface Routes {
    home: string;
    jobs: string;
    publish:string;
    apply: string;
    auth: string;
}
export const appRoutes: Routes = {
    home: "/home",
    jobs: "/jobs",
    publish: "/publish/",
    apply: "/apply/",
    auth: "/auth/",
};

export const URL: string ="http://192.168.121.1:7190/";
  