export function fetchVersion() {
  return fetch('https://api.github.com/repos/shion-app/shion/releases/latest')
    .then((res) => res.json())
    .then(({ tag_name }) => {
      const tagLineParagragh = document.querySelector('div.VPHero.has-image.VPHomeHero > div > div.main > p.tagline')
      const docsReleaseTagSpan = document.createElement('samp')
      docsReleaseTagSpan.classList.add('release-tag')
      docsReleaseTagSpan.innerText = tag_name
      tagLineParagragh?.appendChild(docsReleaseTagSpan)
    })
}