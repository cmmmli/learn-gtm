import { useRouter } from "next/router";
import { useCallback } from "react";

const Page = () => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <>
      <div>{JSON.stringify(router.query)}</div>
      <button onClick={handleClick}>back</button>
    </>
  );
};

export default Page;
