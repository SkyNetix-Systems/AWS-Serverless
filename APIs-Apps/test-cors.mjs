// test-cors.mjs
import fetch from "node-fetch";

const callLambda = async () => {
  try {
    const response = await fetch(
      "https://l3lwd26blh.execute-api.ap-south-1.amazonaws.com/dev/compare-yourself",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

callLambda();
