import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true,
    },
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { _id: false }
);

const StorySchema = new mongoose.Schema(
  {
    dateKey: { type: String, required: true, unique: true }, // e.g., 2025-08-15
    title: { type: String, required: true },
    genre: { type: String, required: true },
    mathConcepts: [{ type: String, required: true }],
    questions: [QuestionSchema],
    prompt: { type: String, required: true },
  },
  { timestamps: true }
);

StorySchema.index({ dateKey: 1 }, { unique: true });

export default mongoose.model("Story", StorySchema);
