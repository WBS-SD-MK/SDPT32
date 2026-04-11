import { Schema, model } from 'mongoose';
import { REFRESH_TOKEN_TTL } from '#config';

const refreshTokenSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    expiresAt: {
      type: Date,
      required: true,
      expires: 0
    }
  },
  {
    timestamps: { createdAt: true, updatedAt: false }
  }
);
// Creates a TTL (Time-To-Live) Index. Document will be removed automatically after <REFRESH_TOKEN_TTL> seconds.
refreshTokenSchema.index({ createdAt: 1 }, { expireAfterSeconds: REFRESH_TOKEN_TTL });
const RefreshToken = model('RefreshToken', refreshTokenSchema);

export default RefreshToken;
