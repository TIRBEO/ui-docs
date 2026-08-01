"use client";

import { Button } from "@tirbeo/ui";
import { Search } from "@tirbeo/icons";

export default function Home() {
  return (
    <main style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Tirbeo UI Documentation</h1>
      <p>Welcome to the Tirbeo design system documentation.</p>
      <Button>Primary Button</Button>
      <Search />
    </main>
  );
}