import React from "react";
import { useParams } from "react-router-dom";

export default function Portfolio() {
  const { user, post } = useParams();
  return (
    <div>
      <h1>
        portfolio {user} {post}
      </h1>
    </div>
  );
}
