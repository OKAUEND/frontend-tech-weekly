import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    hr: () => (
      <hr
        style={{
          margin: "2rem 0",
          height: "2px",
          border: "none",
          width: "100%",
          backgroundColor: "#e5e7eb",
        }}
      />
    ),
  };
}
