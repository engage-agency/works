const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'main',
    repo: 'git@github.com:engage-agency/works.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)