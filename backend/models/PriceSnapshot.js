// placeholder Mongoose model for snapshots (optional)
import mongoose from 'mongoose'

const PriceSnapshotSchema = new mongoose.Schema({
  symbol: String,
  assetType: String,
  price: Number,
  timestamp: { type: Date, default: Date.now },
  rawData: mongoose.Schema.Types.Mixed
})

PriceSnapshotSchema.index({ symbol: 1, timestamp: -1 })

export default mongoose.models.PriceSnapshot || mongoose.model('PriceSnapshot', PriceSnapshotSchema)
