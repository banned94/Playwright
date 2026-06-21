//This is example credential file. Please create your own .env file in the root directory and add your credentials there. Do not forget to add .env file in .gitignore to avoid pushing your credentials to the repository.
import dotenv from 'dotenv';
dotenv.config();

export const credentials = {
  username: process.env.STANDARD_USER!,
  password: process.env.PASSWORD!,
  usernameLocked: process.env.LOCKED_OUT_USER!,
  usernameProblem: process.env.PROBLEM_USER!,
  usernamePerformance: process.env.PERFORMANCE_GLITCH_USER!,
  usernameVisual: process.env.VISUAL_USER!
};