import { gql } from "apollo-boost";

export const POST_FRAGMENT = gql`
  fragment PostParts on Post {
    id
    location
    caption
    user {
      id
      avatar
      username
      isSelf
    }
    files {
      id
      url
    }
    likeCount
    isLiked
    comments {
      id
      text
      user {
        id
        username
        avatar
      }
      createdAt
    }
    createdAt
  }
`;

export const USER_FRAGMENT = gql`
  fragment UserParts on User {
    id
    avatar
    username
    fullName
    isFollowing
    isSelf
    bio
    followingCount
    followersCount
    postsCount,
    rooms {
      id,
      participants {
        id,
        username,
        avatar
      },
      messages {
        id,
        text,
        from {
          id,
          username,
          avatar
        },
        to {
          id,
          username,
          avatar
        },
        room {
          id
        },
        createdAt,
        updatedAt
      },
      createdAt,
      updatedAt
    },
    posts {
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`;
