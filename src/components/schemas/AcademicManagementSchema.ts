import { z } from "zod";

export const academicSemesterSchema = z.object({
  name: z.string({
    required_error: "Please select a semester name before submit",
  }),
  year: z.string({
    required_error: "Please select a year before submit",
  }),
  startMonth: z.string({
    required_error: "Please select a month to start before submit",
  }),
  endMonth: z.string({
    required_error: "Please select a month to end before submit",
  }),
});
