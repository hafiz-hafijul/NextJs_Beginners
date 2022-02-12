import { useRouter } from "next/router";

const bloglist = () => {
  const router = useRouter();
  const pid = router.query.bloglist;
  return (
    <div>
      <h1>Details of blog No. {pid} </h1>
    </div>
  );
};

export default bloglist;
