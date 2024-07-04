
interface blogs {
	id: string,
	blog: {
		markdown: string;
	};
}
export interface main {
	data:blogs[];
}

export interface Project{
	id: string,
	title: string,
	description: string,
	link:string,
	imgLink:string,
	techused: {

			used: Array<string>;

	};
}
export interface Projects {
	data: {projects:Project[];}
}
export interface respBlog{
	blogs:main
}