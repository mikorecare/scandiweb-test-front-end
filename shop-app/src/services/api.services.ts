export const fetchData = async () => {
  try {
    const data = await fetch("/data/data.json");
    const result = await data.json();

    if (result) {
      console.table(result);
    }

  } catch (error){
    console.error(error);
  }
};
