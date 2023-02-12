# not (under construction)

Self-destructing notes with next.js, prisma and planetscale.

---

## Getting Started

Clone this repository.
Install dependencies:

```bash
yarn
```
Connect PlanetScale Database:

```bash
pscale auth login
pscale database connect --service=notez --alias=notez
```

Run the development server:

```bash
yarn dev
```

```bash
npx prisma studio
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Todo

- [ ] Delete Note on API read
- [ ] URLs
- [ ] Themes


