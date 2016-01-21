**Image searcher**

Use:
            
Append a query to the base URL and we'll return some basic metadata from Imgur. You can also view recent queries.

Sample Input:
            
https://url-shortener-micro.herokuapp.com/search/cat?offset=10
            
Sample Output:

[
  {
    "image_url": "http://imgur.com/a/9MiIY",
    "title": "My cat likes to sit like this",
    "page_url": "https://i.imgur.com/9MiIY"
  },
  {
    "image_url": "http://i.imgur.com/Z5LjNl1.gif",
    "title": "Very Funny playing with Cat",
    "page_url": "https://i.imgur.com/Z5LjNl1"
  },
  {
    "image_url": "http://i.imgur.com/mHVi20s.jpg",
    "title": "Trying to game as a cat owner.",
    "page_url": "https://i.imgur.com/mHVi20s"
  },
  {
    "image_url": "http://i.imgur.com/Uk48lPF.jpg",
    "title": "the dark lump in the middle is the cat",
    "page_url": "https://i.imgur.com/Uk48lPF"
  },
  {
    "image_url": "http://i.imgur.com/Cquqzwx.gif",
    "title": "Hey Cat, Shine My Shoes",
    "page_url": "https://i.imgur.com/Cquqzwx"
  },
  {
    "image_url": "http://i.imgur.com/dU2wLl9.gif",
    "title": "A cat having a bath with it's friend ...the fish",
    "page_url": "https://i.imgur.com/dU2wLl9"
  },
  {
    "image_url": "http://i.imgur.com/dqzyAuL.jpg",
    "title": "My dog looks like the cat that looks like Adam Driver.",
    "page_url": "https://i.imgur.com/dqzyAuL"
  },
  {
    "image_url": "http://i.imgur.com/InZj0Sx.jpg",
    "title": "My Cat In my christmas tree",
    "page_url": "https://i.imgur.com/InZj0Sx"
  },
  {
    "image_url": "http://i.imgur.com/mSDr4sU.jpg",
    "title": "Cat + Cat Snake = Cat²Snake?",
    "page_url": "https://i.imgur.com/mSDr4sU"
  },
  {
    "image_url": "http://i.imgur.com/RQqvfdu.jpg",
    "title": "I dont always cat, but when I do, I scratch at the bedroom door at 5am",
    "page_url": "https://i.imgur.com/RQqvfdu"
  }
]

Sample Input:

https://url-shortener-micro.herokuapp.com/latest

Sample Output:

[
  {
    "term": "cat",
    "when": "2016-01-21T18:30:51.853Z"
  },
  {
    "term": "blizzard",
    "when": "2016-01-21T17:53:10.644Z"
  },
  {
    "term": "snow",
    "when": "2016-01-21T16:47:14.399Z"
  },
  {
    "term": "dog",
    "when": "2016-01-21T16:46:31.501Z"
  },
  {
    "term": "coffee",
    "when": "2016-01-21T16:44:39.293Z"
  }]
]