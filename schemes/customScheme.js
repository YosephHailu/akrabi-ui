import { LocalScheme } from '~auth/runtime'
import gql from 'graphql-tag'


export const LOGIN_MUTATION = gql`
  mutation(
    $username: String!
    $password: String!
  ) {
    login(
      input: {
        username: $username
        password: $password
      }
    ) {
      access_token
    }
  }
`

export const LOGOUT_MUTATION = gql`
  mutation LogOutMutation {
    logout {
      status
      message
    }
  }
`

export const USER_DETAILS_QUERY = gql`
  query UserDetailsQuery {
    me {
      id
      email
    }
  }
`

export default class GraphQLScheme extends LocalScheme {
  async login(credentials, { reset = true } = {}) {
    const {
      apolloProvider: { defaultClient: apolloClient },
      $apolloHelpers,
    } = this.$auth.ctx.app

    // Ditch any leftover local tokens before attempting to log in
    // if (reset) {
    //   this.$auth.reset({ resetInterceptor: false })
    // }

    // Make login request
    const response = await apolloClient
      .mutate({
        mutation: LOGIN_MUTATION,
        variables: credentials,
      })
      .then(({ data }) => {
        return data.login
      })

    //   this.token.set(response.access_token)

    // Set your graphql-token
    await $apolloHelpers.onLogin(response.access_token)

    // Fetch user
    await this.fetchUser()

    const hasToken = !!$apolloHelpers.getToken()
    console.log(hasToken)
    // Update tokens
    return response.access_token
  }

  fetchUser() {

    const {
      apolloProvider: { defaultClient: apolloClient },
    } = this.$auth.ctx.app


    // Try to fetch user
    return apolloClient
      .query({
        query: USER_DETAILS_QUERY,
      })
      .then(({ data }) => {
        if (!data.me) {
          const error = new Error(`User Data response not resolved`)
          return Promise.reject(error)
        }

        console.log(data);
        // this.$auth.setUser(data.me)

        return data.me
      })
      .catch((error) => {
        this.$auth.callOnError(error, { method: 'fetchUser' })
        return Promise.reject(error)
      })
  }

  async logout() {
    const {
      apolloProvider: { defaultClient: apolloClient },
      $apolloHelpers,
    } = this.$auth.ctx.app

    await apolloClient
      .mutate({
        mutation: LOGOUT_MUTATION,
      })
      .catch(() => {
        // Handle errors
      })

    // But reset regardless
    $apolloHelpers.onLogout()
    return this.$auth.reset({ resetInterceptor: false })
  }

  initializeRequestInterceptor() {
    // Instead of initializing axios interceptors, Do nothing
    // Since we are not using axios
  }

  reset() {
    this.$auth.setUser(false)
    this.token.reset()
  }
}