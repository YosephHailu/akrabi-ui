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
                user {
                    id,
                    name,
                    user_image
                    status
                    badge_id
                    description
                    verified
                    current_location {
                        lat
                        lng
                    }
                }
            }
        }
    }
`;

export const SINGLE_JOB_PREFERENCE_QUERY = gql `
    query($id: ID!) {
        jobPreference(id: $id) {
            id,
            employment_type,
            amount,
            jobCategory {
                name,
                description,
                icon_image,
            },
            user {
                id,
                name,
                user_image
                status
                badge_id
                description
                verified
                jobPreferences {
                id,
                employment_type,
                amount,
                jobCategory {
                    name,
                    description,
                    icon_image,
                },
                }
                current_location {
                    lat
                    lng
                }
            }
        }
    }
`;

export const REGISTER_JOB_PREFERENCE_MUTATION = gql `
    mutation($amount: Float!, $employment_type: String!, $job_category_id: ID!) {
        createJobPreference(input: {jobCategory: {connect: $job_category_id}, employment_type: $employment_type, amount: $amount}) {
            id
        }
    }
`;
