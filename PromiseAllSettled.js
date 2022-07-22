// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, "foo")
// );
// const promises = [promise1, promise2];
// Promise.allSettled(promises).then((results) =>
//   results.forEach((result) => console.log(result))
// );

// Promise.allSettled([
//   Promise.resolve(1),
//   new Promise((resolve) => {
//     resolve(2);
//   }),
//   Promise.reject(new Error("an error")),
// ]).then((values) => console.log(values));

export const useDataArray = () => {
  const [data, setData] = useState(null);
  function fetchFromApi(url) {
    return fetch(url).then((res) => res.json());
  }
  fetchUrlArray = [
    fetchFromApi("https://jsonplaceholder.typicode.com/todos/1"),
    fetchFromApi("https://jsonplaceholder.typicode.com/todos/2"),
    fetchFromApi("https://jsonplaceholder.typicode.com/todos/3"),
    fetchFromApi("https://jsonplaceholder.typicode.com/todos/4"),
    fetchFromApi("https://jsonplaceholder.typicode.com/todos/5"),
  ];
  useEffect(() => {
    const asyncData = async () => {
      const res = await Promise.allSettled(fetchUrlArray);
      setData(res);
    };
    asyncData();
  }, []);
  return data;
};
// const data = useDataArray()

console.log(values);
const data = values.filter((value) => value.status === "fulfilled");
const data2 = values.filter((value) => value.status === "rejected");
console.log(data);
