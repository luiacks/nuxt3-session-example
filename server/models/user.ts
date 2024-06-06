import mongoose from "mongoose";
import { compareSync, genSaltSync, hashSync } from "bcrypt";

interface IUser {
  email: string;
  password: string;
  emailVerified: boolean;
  name: string;
}

interface IUserMethods {
  verifyPassword(plainPassword: string): boolean;
}

const userSchema = new mongoose.Schema<IUser, {}, IUserMethods>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
    methods: {
      verifyPassword(plainPassword) {
        return compareSync(plainPassword, this.password);
      },
    },
  },
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = hashSync(this.password, genSaltSync());
  next();
});

export const User = mongoose.model("user", userSchema);
