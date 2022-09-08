import gql from 'graphql-tag'

export const JOB_CATEGORY_QUERY = gql `
    query {
        job_categories(first:10, page: 1) {
                data {
                    id,
                    name,
                    icon_image
                }
        }
    }
`;
