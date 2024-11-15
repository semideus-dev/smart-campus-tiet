"use client";

import { reportFireFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { HashLoader } from "react-spinners";
import { reportHazard } from "@/lib/fire/utils";

export default function ReportForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof reportFireFormSchema>>({
    resolver: zodResolver(reportFireFormSchema),
    defaultValues: {
      location: "",
    },
  });

  function onSubmit(values: z.infer<typeof reportFireFormSchema>) {
    try {
      setLoading(true);
      reportHazard({ values });
      form.reset();
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-3xl font-medium capitalize">Report Fire Hazard</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 rounded-lg border-2 border-b-primary p-4"
        >
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            {loading ? <HashLoader color="white" size={20} /> : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
