function MapaKdb({ Component, pageProps }) {
  return (
    <>
      <style jsx>
        .overlay {
          position: relative;
        width: 100%;
        height: 450px;
        top: 450px;
        margin-top: -450px;
        z-index: 1;
}

      </style>
      <div class="overlay" onclick="style.pointerEvents='none'">
        <iframe
          width="100%"
          height="900"
          style={{ border: 0 }}
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/d/embed?mid=1huOIgZ8XMac7ob53RkbRy5Y67DmXeiSl&z=17">

        </iframe>
      </div>
    </>
  )
}

export default MapaKdb
