
import React from 'react'

export default function yaz ({isim,soyisim,link,yil}) {
  return (
  <div>
    <p>İsmim {isim}</p>
    <p>Soyismim {soyisim}</p>
    <p>Dogun yıllı :{yil} </p>
    <img src={link} alt=''/>
    </div>
  )
}
