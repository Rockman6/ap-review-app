# Past Papers

Drop AP exam PDFs here, then register them in `lib/past-papers.ts`.

## Recommended folder structure

```
public/past-papers/
  ap-micro/
    2024/
      mcq.pdf
      frq.pdf
    2023/
      mcq.pdf
      frq.pdf
  ap-bio/
    2024/
      ...
```

## Registering a paper

In `lib/past-papers.ts`, add an entry to the `papers` array of the relevant subject:

```ts
{
  id: "ap-micro-2024-frq",
  year: 2024,
  section: "frq",
  title: { en: "2024 Free Response", zh: "2024 自由回答题" },
  file: "/past-papers/ap-micro/2024/frq.pdf",
}
```

The `file` path is relative to the `/public` folder.
