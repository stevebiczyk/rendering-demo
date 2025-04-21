import { serverSideFunction } from "../utils/server-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction(); // This function is only executed on the server side
  return (
    <div>
      <h1>Server Route {result}</h1>
    </div>
  );
}
