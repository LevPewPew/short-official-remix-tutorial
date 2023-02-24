import { Link, Outlet } from "@remix-run/react";

export default function AdminIndex() {
  return (
    <p>
      <Link to="new" className="text-blue-600 underline">
        Create a New Post
      </Link>
    </p>
  );
}

// NEXT investigate how to do multi layer nested routes (an outlet into an outlet)
