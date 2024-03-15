const axios = require("axios");

// const getPost = () => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts/1")
//       .then((response) => {
//         resolve(response);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };

const getPost = async () => {
  console.log("1");
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  console.log("2");
  return res;
};

// mongodb+srv://rpragacs:Vikipraga1125@cluster0.kv3528y.mongodb.net/

getPost().then((res) => {
  console.log(res.data);
});
