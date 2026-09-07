"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { submitLead } from "@/app/actions";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Please enter your full name.",
  }),

  email: z.string().email({
    message: "Please enter a valid email address.",
  }),

  phone: z
    .string()
    .min(10, {
      message: "Please enter a valid phone number.",
    })
    .max(15, {
      message: "Please enter a valid phone number.",
    }),

  company: z.string().min(2, {
    message: "Please enter your company name.",
  }),

  lead_source: z.string(),
});

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      lead_source: "Thayi Doors Website",
    },
  });

  async function onSubmit(
    values: z.infer<typeof formSchema>
  ) {
    setIsSubmitting(true);

    try {
      const result = await submitLead({
        name: values.name,
        email: values.email,
        phone: values.phone,
        company: values.company,
        lead_source: values.lead_source,
      });

      if (result.success) {
        /*
         * Google Ads conversion tracking
         */
        if (
          typeof window !== "undefined" &&
          typeof window.gtag === "function"
        ) {
          window.gtag("event", "conversion", {
            send_to: "AW-17338354366/8sWpCITnsfEaEL6VyctA",
          });
        }

        router.push("/thank-you?success=true");
      } else {
        toast({
          title: "Submission Failed",
          description:
            result.message ||
            "Could not submit your details. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);

      toast({
        title: "Something went wrong",
        description:
          "Unable to submit your details. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card
      id="lead-form"
      className="scroll-mt-24 border-border/50 bg-background/95 shadow-xl backdrop-blur-sm"
    >
      <CardHeader className="pb-6">
        <CardTitle className="font-heading text-2xl font-medium text-primary sm:text-3xl">
          Get a Free Consultation
        </CardTitle>

        <CardDescription className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Send us your door schedule — we will match designs to every
          opening and quote.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* Hidden Lead Source */}
            <input
              type="hidden"
              {...form.register("lead_source")}
            />

            {/* Your Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Address */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>

                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>

                  <FormControl>
                    <Input
                      type="tel"
                      inputMode="tel"
                      placeholder="Enter your phone number"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Company Name */}
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Enter your company name"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Get a Free Quote
                    <span className="ml-2">→</span>
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}