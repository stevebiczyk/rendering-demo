"use client"; // This is a client component

import { serverSideFunction } from "../utils/server-utils";

export default function ClientRoutePage() {
  const result = serverSideFunction(); // This function is executed on the client side
  return (
    <div>
      <h1>Client Route {result}</h1>
      <p>This is a client route page.</p>
    </div>
  );
}
