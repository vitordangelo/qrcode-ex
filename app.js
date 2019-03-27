const QRCode = require('qrcode')
const vCardsJS = require('vcards-js')

const vCard = vCardsJS();
 
vCard.firstName = 'Vitor Ivan';
vCard.lastName = 'DAngelo';
vCard.organization = 'V2Tech Soluções';
vCard.workPhone = '35998212157';
vCard.url = 'https://vitordangelo.dev';
vCard.note = 'ID do TheVIPS' 
vCard.email = 'metroid.p2p@gmail.com';

const card = vCard.getFormattedString()

const generateQR = async text => {
  try {
    console.log(await QRCode.toDataURL(text))
  } catch (err) {
    console.error(err)
  }
}

generateQR(card)