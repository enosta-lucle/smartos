# smartos-landing

To install dependencies:

```bash
pnpm i
```

To run:

```bash
pnpm dev
```


## Strapi 

### Export 
```bash 
cd apps/strapi && pnpm strapi export \
  --key   smartos \
  --file  __generated__/data
```

### Import
```bash
cd apps/strapi && pnpm strapi import \
  --key   smartos \
  --file  __generated__/data.tar.gz.enc
```
