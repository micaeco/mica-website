"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ToastContainer } from "react-toastify";
import { Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRegisterForm } from "../_hooks/use-register-lead";

export default function RegisterForm() {
  const t = useTranslations("register");
  const tCommon = useTranslations("common");
  const tForm = useTranslations("register.form");

  const { form, onSubmit, isSubmitting } = useRegisterForm();

  return (
    <section className="bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-md rounded-lg bg-white shadow-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-center capitalize">{t("title")}</CardTitle>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {tForm("name.label")} <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="surname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {tForm("surname.label")} <span className="text-destructive">*</span>
                      </FormLabel>
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
                      <FormLabel>
                        {tForm("email.label")} <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {tForm("phone.label")} {`(${tCommon("optional")})`}
                      </FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="referralSource"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {tForm("referralSource.label")} {`(${tCommon("optional")})`}
                      </FormLabel>
                      <FormControl>
                        <Input placeholder={tForm("referralSource.placeholder")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4 pb-4 pt-8">
                  <FormField
                    control={form.control}
                    name="interestInBeta"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-2">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormLabel className="text-sm">
                          <Link href="/beta" className="text-blue-500 underline">
                            {tForm("interestInBeta.label")}
                          </Link>
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="privacyPolicy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-2">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormLabel className="text-sm">
                          <Link href="/privacy-policy" className="text-blue-500 underline">
                            {tForm("privacyPolicy.label")}
                          </Link>{" "}
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <CardFooter className="px-0">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full capitalize"
                  >
                    {isSubmitting && <Loader2 className="mr-2 animate-spin" />}
                    {isSubmitting ? tCommon("sending") + "..." : tCommon("send")}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
        className="!text-xl"
      />
    </section>
  );
}
