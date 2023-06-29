export function fetchRelease() {
  return fetch('https://api.github.com/repos/shion-app/shion/releases/latest')
    .then((res) => res.json())
    .then(({ tag_name, assets }) => {
      const tagLineParagragh = document.querySelector('div.VPHero.has-image.VPHomeHero > div > div.main > p.tagline')
      const docsReleaseTagSpan = document.createElement('samp')
      docsReleaseTagSpan.classList.add('release-tag')
      docsReleaseTagSpan.innerText = tag_name
      tagLineParagragh?.appendChild(docsReleaseTagSpan)
      const asset = assets.find(({ browser_download_url }) => browser_download_url.includes('setup.exe'))
      if (!asset) return
      const { browser_download_url } = asset
      const donwload = document.querySelector('div.VPHero.has-image.VPHomeHero > div > div.main > .actions .brand')
      if (!donwload) return
      donwload.setAttribute('href', browser_download_url)
    })
}