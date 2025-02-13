 export const youtubeApikey='AIzaSyCgdS1mt1lgPF--FBhHNP6d_n3eFOZNaWA';

 export const youtubeVideKey='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key='+youtubeApikey

 const youtubesuggestion='http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

 export default youtubesuggestion;

 export const youtubeSearch='https://www.googleapis.com/youtube/v3/search?part=snippet&q=';
 
 export   const chatCount=25;

 export const comments = [
    {
      name: "karthik",
      comment: "This is the first comment.",
      replies: [
        {
          name: "arvind",
          comment: "This is a reply to Karthik's comment.",
          replies: [
            {
              name: "jane",
              comment: "This is a nested reply under Arvind's reply.",
              replies: [
                {
                  name: "karthik",
                  comment: "This is a nested reply under Jane's reply.",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          name: "raju",
          comment: "This is another reply to Karthik's comment.",
          replies: [
            {
              name: "arvind",
              comment: "This is a reply to Raju's comment.",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "john",
      comment: "This is the second comment.",
      replies: [
        {
          name: "alice",
          comment: "This is a reply to John's comment.",
          replies: [
            {
              name: "bob",
              comment: "This is a nested reply under Alice's reply.",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "susan",
      comment: "This is the third comment.",
      replies: [],
    },
  ];
  