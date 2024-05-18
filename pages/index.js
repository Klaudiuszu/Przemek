// import { useRouter } from "next/router";
// import { useEffect } from "react";

// export default function Home() {

//   const router = useRouter();

//   useEffect(() => {
//     router.replace('/en');
//   }, [router]);


//   return (
//     <>
//     </>
//   );
// }
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/pl');
  }, [router]);

  return null;
}