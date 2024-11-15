"use client";

import { registerEventFormSchema } from "@/lib/schemas";
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
import { addAttendee } from "@/lib/events/utils";

export default function RegisterEventForm({
  currentEvent,
}: {
  currentEvent: string;
}) {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof registerEventFormSchema>>({
    resolver: zodResolver(registerEventFormSchema),
    defaultValues: {
      event_name: currentEvent,
      name: "",
      email: "",
      semester: "",
    },
  });

  function onSubmit(values: z.infer<typeof registerEventFormSchema>) {
    try {
      setLoading(true);
      addAttendee({ values });
      form.reset();
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-3xl font-medium capitalize">Register for Event</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 rounded-lg border-2 border-b-primary p-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="event_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Name</FormLabel>
                  <FormControl>
                    <Input disabled {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="semester"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Semester</FormLabel>
                  <FormControl>
                    <Input placeholder="eg. 1st Semester" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">
            {loading ? <HashLoader color="white" size={20} /> : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
