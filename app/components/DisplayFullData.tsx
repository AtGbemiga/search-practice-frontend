import getAllData from "@/lib/getAllData";

export const DisplayFullData = async () => {
  const userData: AllData[] = await getAllData();

  const content = (
    <main>
      {userData.map((item) => {
        return (
          <div key={item._id}>
            <h4>Title: {item.title}</h4>
            <h5>Seller: {item.seller}</h5>
            <h5>Cost: {item.cost}</h5>
            <h5>Grade: {item.grade}</h5>
            <h5>Made at: {item.madeAt}</h5>
          </div>
        );
      })}
    </main>
  );
  return content;
};
