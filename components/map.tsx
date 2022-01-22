import { MapContainer, Marker, Popup, TileLayer,  } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { icon } from "leaflet"
// import MyComponet from 'react-leaflet-providers'

const Map = () => {
  const CustomIcon = icon({
    iconUrl: "/boxtribute-logo.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  })
  return (
    <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={false} style={{height: 400, width: "50%"}}>
      
      <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.png'
      />
       <Marker icon={CustomIcon} position={[52.5243, 13.4105]}>
        <Popup>wprowadzono ograniczenia. W 2020 do Polski sprowadzono 848 154 samochodów (ponad połowę z Niemiec). Wiek importowanych aut wyniósł średnio 12 lat i 1 miesiąc.

Jak policzył serwis AAAauto, na ponad dwa miliony ofert sprzedaży samochodów aż 869 871 samochodów miało 15 lat i więcej, mediana wieku takich aut wynosiła 17,3, mediana ceny – 7500 złotych, a mediana przebiegu 230 tys. kilometrów.

Najpopularniejszym sprowadzanym modelem było audi A4, na drugim miejscu był volkswagen golf. Według AAA Auto mediana wieku tego pierwszego oferowanego na sprzedaż to 17,9 lat, mediana vw golfa to 18,3 lat.</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map