import React from 'react';

export default class Ads extends React.Component {
  componentDidMount() {
    const installGoogleAds = () => {
      const elem = document.createElement('script');
      elem.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6670064658692555';
      elem.async = true;
      document.body.insertBefore(elem, document.body.firstChild);
    };
    installGoogleAds();
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3208217549268181"
        data-ad-slot="6931028836"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    );
  }
}
