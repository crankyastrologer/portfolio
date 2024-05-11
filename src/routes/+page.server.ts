import { GraphQLClient } from 'graphql-request';
/** @type {import('./$types').PageLoad} */
export const load = async () => {
	const hyghgraph = new GraphQLClient(
		import.meta.env.VITE_GRAPHQL_URL,

		{
			headers: {}
		}
	);
	const response: any = await hyghgraph.request(`query blog {
        blog(where: {id: "cluio2nz307qt07poop0fpsxi"}) {
          id
          blog {
            html
          }
        }
      }
      `);
	const data: any = response.blog.blog.html;

	return { data };
};
