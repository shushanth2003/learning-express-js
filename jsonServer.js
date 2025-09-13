const express = require("express");
const app = express();


// working on JSON Data
const posts = [
  { id: 1, posts: "one posts" },
  { id: 2, posts: "two posts" },
  { id: 3, posts: "three posts" },
];

// posting the data
app.get("/api/posts", (req, res) => {
  res.json(posts);
});
//posting the single request
app.get("/api/posts/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    res.json(posts.filter((post)=>post.id===id));
})
// listening the data
app.listen(8080, () =>
  console.log(`Server in production at ${8080}`)
);
