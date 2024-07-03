import { GraphQLClient } from 'graphql-request';
import {HYGRAPH_API} from '$env/static/private'
export const hyghgraph = new GraphQLClient(
        HYGRAPH_API,

        {
			headers: {}
		}
    )