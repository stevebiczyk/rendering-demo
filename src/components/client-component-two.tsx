"use client";

import { useState } from "react";

export const ClientComponentTwo = () => {
  const [name, setName] = useState("Batman");

  return <h2>Client Component Two</h2>;
};
