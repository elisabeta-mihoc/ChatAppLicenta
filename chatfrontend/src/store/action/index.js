//will define the action object and return the the same to avoid writing the object every time we need it.

//here we export the function process with the defined parameters and define action object PROCESS, which will return the same parameters as the payload.
export const process = (encrypt, text, cypher) => {
  return {
    type: "PROCESS",
    payload: {
      encrypt,
      text,
      cypher,
    },
  };
};
