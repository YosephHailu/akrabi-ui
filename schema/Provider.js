import gql from 'graphql-tag'

export const ACCOUNT_REGISTRATION_MUTATION = gql `
    mutation($name: String!, $email: String!, $password: String!, $lat: Float, $lng: Float, $image: Upload) {
        register(input:{name: $name, email: $email, password: $password, password_confirmation: $password, lat: $lat, lng: $lng, image: $image}) {
            tokens {
                access_token
            }
        }
    }
`;

export const REGISTER_PROVIDER_MUTATION = gql `
    mutation($name: String!, $description: String, $lat: Float, $lng: Float, $image: Upload) {
        createProvider(input: {name: $name, description: $description, lat: $lat, lng: $lng, image: $image}) {
            name
        }
    }
`;
