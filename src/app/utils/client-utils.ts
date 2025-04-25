import "client-only"; // This is a client-only module

export const clientSideFunction = () => {
  // This function is only executed on the client side
  console.log(`use window object, use localStorage`);
  return "Client-side data";
};
