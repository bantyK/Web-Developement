export class WikiData {
    private title: string;
    private description: string;
    private link: string;

    constructor(titles:string, description: string, link: string){
        this.title = titles;
        this.description = description;
        this.link = link;
    }
}
