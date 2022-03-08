const PROTO_PATH = 'src/protos/stock.proto'

const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
})
const stock_proto = grpc.loadPackageDefinition(packageDefinition).stock

const client = new stock_proto.GetStock(
  process.env.PROTO_URL,
  grpc.credentials.createInsecure()
)

module.exports = client
