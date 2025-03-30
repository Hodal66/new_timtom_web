import { gql } from "@apollo/client";

export const ADD_CONTACT_US_INFORMATION = gql`
  mutation CreateContactUs($input: ContactInput) {
    createContactUs(input: $input) {
      _id
      fullName
      email
      telephone
      message
    }
  }
`;

export const GET_ALL_CONTACT_US_INFORMATION = gql`
  query GetAllContactUs {
    getAllContactUs {
      _id
      fullName
      email
      telephone
      message
    }
  }
`;

export const GET_CONTACT_US_BY_ID = gql`
  query GetContactUsById($contactUsId: ID!) {
    getContactUsById(ContactUsId: $contactUsId) {
      _id
      fullName
      email
      telephone
      message
    }
  }
`;

export const DELETE_CONTACT_INFO = gql`
  mutation DeleteContactUs($contactUsId: ID!) {
    deleteContactUs(ContactUsId: $contactUsId)
  }
`;
