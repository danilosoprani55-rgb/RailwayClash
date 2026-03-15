const PiranhaMessage = require('../../PiranhaMessage')
const ServerHelloMessage = require('../Server/ServerHelloMessage')
const LoginOkMessage = require('../Server/LoginOkMessage')
const OwnHomeDataMessage = require('../Server/OwnHomeDataMessage')
const AllianceStreamMessage = require('../Server/AllianceStreamMessage')
const BookmarkListMessage = require('../Server/BookmarkListMessage')
const FriendRequestListMessage = require('../Server/FriendRequestListMessage')
const Unknown25418 = require('../Server/Unknown25418')
const Unknown23230 = require('../Server/Unknown23230')
const Unknown27349 = require('../Server/Unknown27349')
const Unknown22287 = require('../Server/Unknown22287')
const Unknown29023 = require('../Server/Unknown29023')
const Unknown22857 = require('../Server/Unknown22857')
const Unknown26416 = require('../Server/Unknown26416')
const Unknown20553 = require('../Server/Unknown20553')
const Unknown22000 = require('../Server/Unknown22000')

class ClientHelloMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 10100
    this.version = 0
  }

  async decode () {
    this.data = {}

    this.data.Protocol = this.readInt()
    this.data.KeyVersion = this.readInt()
    this.data.MajorVersion = this.readInt()
    this.data.MinorVersion = this.readInt()
    this.data.BuildVersion = this.readInt()
    this.data.FingerprintSha = this.readString()
    this.data.DeviceType = this.readInt()
    this.data.AppStore = this.readInt()

    //console.log(this.data)
  }

  async process () {
    await new ServerHelloMessage(this.client).send()

    await new LoginOkMessage(this.client).send()
    await new OwnHomeDataMessage(this.client).send()
    await new AllianceStreamMessage(this.client).send()
    await new BookmarkListMessage(this.client).send()
    await new FriendRequestListMessage(this.client).send()
    await new Unknown25418(this.client).send()
    await new Unknown23230(this.client).send()
    await new Unknown27349(this.client).send()
    await new Unknown22287(this.client).send()
    await new Unknown29023(this.client).send()
    await new Unknown22857(this.client).send()
    await new Unknown26416(this.client).send()
    await new Unknown20553(this.client).send()
    await new Unknown22000(this.client).send()
  }
}

module.exports = ClientHelloMessage