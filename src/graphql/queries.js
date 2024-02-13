import gql from 'graphql-tag';

export const ALL_GAMES = gql`
    query Game {
        games {
            id
            url
            emailDescription
            donationGoal
            donationAmount
        }
    }
`;