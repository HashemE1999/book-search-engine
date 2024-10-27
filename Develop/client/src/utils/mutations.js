import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($tech1: String!, $tech2: String!) {
    loginUser(tech1: $tech1, tech2: $tech2) {
      token
      user {
      _id
      username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($_id: String!, $techNum: Int!) {
    addUser(_id: $_id, techNum: $techNum) {
      token
      user {
      _id
      username
      email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($_id: String!, $techNum: Int!) {
    saveBook(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($_id: String!, $techNum: Int!) {
    removeBook(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;