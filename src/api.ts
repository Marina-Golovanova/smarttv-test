const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

export const api = {
  checkNumber: async (number: string) => {
    const res = await fetch(
      `http://apilayer.net/api/validate?access_key=${ACCESS_KEY}&number=${number}`
    );

    if (res.ok) {
      return res.json();
    }

    throw new Error("Something went wrong");
  },
};
