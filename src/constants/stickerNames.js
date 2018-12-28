import bed from '../img/stickers/bed.png'
import boombox from '../img/stickers/boombox.png'
import bubble from '../img/stickers/bubble.png'
import bubble2 from '../img/stickers/bubble2.png'
import candle from '../img/stickers/candle.png'
import car from '../img/stickers/car.png'
import cat from '../img/stickers/cat.png'
import crescent1 from '../img/stickers/crescent1.png'
import crescent2 from '../img/stickers/crescent2.png'
import dots from '../img/stickers/dots.png'
import envelope from '../img/stickers/envelope.png'
import fleur from '../img/stickers/fleur.png'
import fleur2 from '../img/stickers/fleur2.png'
import floor from '../img/stickers/floor.png'
import fullmoon from '../img/stickers/fullmoon.png'
import halfmoon1 from '../img/stickers/halfmoon1.png'
import halfmoon2 from '../img/stickers/halfmoon2.png'
import heart from '../img/stickers/heart.png'
import heart2 from '../img/stickers/heart2.png'
import house from '../img/stickers/house.png'
import lamp from '../img/stickers/lamp.png'
import luna from '../img/stickers/luna.png'
import milk from '../img/stickers/milk.png'
import moon from '../img/stickers/moon.png'
import moon2 from '../img/stickers/moon2.png'
import mug from '../img/stickers/mug.png'
import music from '../img/stickers/music.png'
import newmoon from '../img/stickers/newmoon.png'
import pencil from '../img/stickers/pencil.png'
import phone from '../img/stickers/phone.png'
import sparkle1 from '../img/stickers/sparkle1.png'
import sparkle2 from '../img/stickers/sparkle2.png'
import sparkle3 from '../img/stickers/sparkle3.png'
import sword from '../img/stickers/sword.png'
import windoww from '../img/stickers/windoww.png'
import wing2 from '../img/stickers/wing2.png'
import wing1 from '../img/stickers/wing1.png'
import zz from '../img/stickers/zz.png'

export const STICKERS_PAGEONE = [
  'pencil',
  'music',
  'zz',
  'heart',
  'fleur',
  'fleur2',
  // 'leaf',
  'bubble',
  'bubble2',
  'dots',
  'heart2'
  // 'fleur3',
  // 'fleur4',
  // 'fleur5'
]
export const STICKERS_PAGETWO = [
  'lamp',
  'bed',
  'windoww',
  'cat',
  'floor',
  'boombox',
  'car',
  'envelope',
  'phone',
  'house',
  'mug',
  'milk'
]
export const STICKERS_PAGETHREE = [
  'wing1',
  'wing2',
  'sword',
  'candle',
  'luna',
  'sparkle1',
  'sparkle2',
  'sparkle3',
  'moon',
  'moon2',
  'crescent1',
  'crescent2',
  'halfmoon1',
  'halfmoon2',
  'fullmoon',
  'newmoon'
]

export const getImg = name => {
  let img
  switch (name) {
    case 'moon':
      img = moon
      break
    case 'bed':
      img = bed
      break
    case 'boombox':
      img = boombox
      break
    case 'bubble':
      img = bubble
      break
    case 'bubble2':
      img = bubble2
      break
    case 'candle':
      img = candle
      break
    case 'car':
      img = car
      break
    case 'cat':
      img = cat
      break
    case 'crescent1':
      img = crescent1
      break
    case 'crescent2':
      img = crescent2
      break
    case 'dots':
      img = dots
      break
    case 'envelope':
      img = envelope
      break
    case 'fleur':
      img = fleur
      break
    case 'fleur2':
      img = fleur2
      break
    case 'floor':
      img = floor
      break
    case 'fullmoon':
      img = fullmoon
      break
    case 'halfmoon1':
      img = halfmoon1
      break
    case 'halfmoon2':
      img = halfmoon2
      break
    case 'heart':
      img = heart
      break
    case 'heart2':
      img = heart2
      break
    case 'house':
      img = house
      break
    case 'lamp':
      img = lamp
      break
    case 'luna':
      img = luna
      break
    case 'milk':
      img = milk
      break
    case 'moon2':
      img = moon2
      break
    case 'mug':
      img = mug
      break
    case 'music':
      img = music
      break
    case 'newmoon':
      img = newmoon
      break
    case 'pencil':
      img = pencil
      break
    case 'phone':
      img = phone
      break
    case 'sparkle1':
      img = sparkle1
      break
    case 'sparkle2':
      img = sparkle2
      break
    case 'sparkle3':
      img = sparkle3
      break
    case 'sword':
      img = sword
      break
    case 'windoww':
      img = windoww
      break
    case 'wing1':
      img = wing1
      break
    case 'wing2':
      img = wing2
      break
    case 'zz':
      img = zz
      break
    default:
      img = ''
  }
  return img
}
