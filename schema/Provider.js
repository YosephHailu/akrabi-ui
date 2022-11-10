import gql from 'graphql-tag'

export const ACCOUNT_REGISTRATION_MUTATION = gql `
    mutation($name: String!, $email: String!, $password: String!, $lat: Float, $lng: Float) {
        register(input:{name: $name, email: $email, password: $password, password_confirmation: $password, lat: $lat, lng: $lng}) {
            tokens {
                access_token
            }
        }
    }
`;

export const LOGIN_MUTATION = gql `
    mutation($username: String!, $password: String!) {
        login(input:{ username: $username, password: $password }) {
            access_token
            refresh_token
            expires_in
            token_type
            user {
            id
            email
            }
        }
    }
`;

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
