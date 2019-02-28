const QRCode = require('qrcode')
 
// QRCode.toDataURL('I am a pony!', function (err, url) {
//   console.log(url)
// })

const card = `
  BEGIN:VCARD
  VERSION:4.0
  N:Gump;Forrest;;Mr.;
  FN:Forrest Gump
  ORG:Bubba Gump Shrimp Co.
  TITLE:Shrimp Man
  TEL;TYPE=work,voice;VALUE=uri:tel:+1-111-555-1212
  EMAIL:forrestgump@example.com
  REV:20080424T195243Z
  x-qq:21588891
  END:VCARD
`

const generateQR = async text => {
  try {
    console.log(await QRCode.toDataURL(text))
  } catch (err) {
    console.error(err)
  }
}

generateQR(card)