import gql from 'graphql-tag'

export const JOB_PREFERENCE_QUERY = gql `
    query($job_category_id: ID, $amount: Float) {
        jobPreferences(first:50, page: 1, job_category_id: $job_category_id, amount: $amount) {
            data {
            id,
            employment_type,
            amount,
            jobCategory {
                name,
                description,
                icon_image,
            },
            provider {
                id,
                name,
                provider_image
                status
                badge_id
                description
                verified
                location {
                    lat
                    lng
                }
            }
            }
        }
    }
`;
