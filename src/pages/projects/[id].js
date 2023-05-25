import { useRouter } from 'next/router';

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
