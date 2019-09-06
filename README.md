# step to reproduce
```
git clone https://github.com/saknarak/nuxt-issue-6279
cd nuxt-issue-6279
npm i
npm run dev
# open http://localhost:3001
npm run build
# serve dist
# open http://localhost:5000
```

# Result
## in development
- Load time about 500ms
- Update time about 3000-5000ms
## in production
- Load time about 250ms
- Update time about 10-20ms
