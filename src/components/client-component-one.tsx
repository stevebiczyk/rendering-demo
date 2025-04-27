"use client";

import { useState } from "react";

export const ClientComponentOne = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState("Batman");

  return (
    <>
      <h2>Client Component One</h2>
      {children}
    </>
  );
};
