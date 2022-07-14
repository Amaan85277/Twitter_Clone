// thsi file contains all teh data for a tweet
// every tweets {id, user details} in an array

const tweets = [
  {
    id: "1",
    user: {
      id: "u1",
      username: "2Dfax",
      name: "Amaan",
      image: "https://allthefujoshiunite.files.wordpress.com/2021/02/last.jpg",
    },
    createdAt: "2022-06-13T12:00:00.00Z",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." ,
    image:
      "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg",
    numberOfComments: "112",
    numberOfRetweets: "11",
    numberOfLikes: "80",
  },
  {
    id: "2",
    user: {
      id: "u1",
      username: "2Dfax",
      name: "Amaan",
      image: "https://allthefujoshiunite.files.wordpress.com/2021/02/last.jpg",
    },
    createdAt: "2022-06-13T12:00:00.00Z",
    content:
      "Finally a Second tweeet.... No image for this one" ,
    numberOfComments: "1",
    numberOfRetweets: "13",
    numberOfLikes: "10",
  },
  {
    id: "3",
    user: {
      id: "u1",
      username: "2Dfax",
      name: "Amaan",
      image: "https://allthefujoshiunite.files.wordpress.com/2021/02/last.jpg",
    },
    createdAt: "2022-06-13T12:00:00.00Z",
    content:
      "Blank, just with a picture. Nothing much" ,
    image:
      "https://allthefujoshiunite.files.wordpress.com/2021/02/last.jpg",
    numberOfComments: "11",
    numberOfRetweets: "9",
    numberOfLikes: "100",
  },
  {
    id: "4",
    user: {
      id: "u1",
      username: "2Dfax",
      name: "Amaan",
      image: "https://allthefujoshiunite.files.wordpress.com/2021/02/last.jpg",
    },
    createdAt: "2022-06-13T12:00:00.00Z",
    content:
      "I love this anime. Kinda OP" ,
    image:
      "https://cdn.technadu.com/wp-content/uploads/2022/01/My-Hero-Academia-Deku-and-Kacchan.jpg",
    numberOfComments: "2",
    numberOfRetweets: "3",
    numberOfLikes: "10",
  },
];

export default tweets;
