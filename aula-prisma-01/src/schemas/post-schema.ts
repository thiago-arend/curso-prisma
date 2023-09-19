import * as JoiBase from "joi";
import * as joiDate from "@joi/date";
import { CreatePost } from "repositories/post-repository";

const Joi = JoiBase.extend(joiDate.default(JoiBase)) as typeof JoiBase;

export const postSchema = Joi.object<CreatePost>({
  username: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  createAt: Joi.date().format("YYYY/MM/DD")
})