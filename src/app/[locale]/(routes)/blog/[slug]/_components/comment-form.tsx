"use client";

import { useEffect } from "react";
import { useLocale, useMessages, useTranslations } from "next-intl";
import { InfoIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer } from "react-toastify";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CommentFormSchema } from "@/schemas/blog";
import { type BlogCommentForm } from "@/types/blog";

interface Props {
  postId: string;
  addComment: (
    postId: string,
    name: string,
    email: string,
    comment: string,
    parentId?: string
  ) => Promise<void>;
  parentId?: string;
  onSuccess: () => void;
  isReply: boolean;
}

export default function CommentForm({ postId, addComment, parentId, onSuccess, isReply }: Props) {
  const t = useTranslations("blog.comments");
  const common = useTranslations("common");
  const messages = useMessages() as unknown as IntlMessages;
  const locale = useLocale();

  const form = useForm<BlogCommentForm>({
    resolver: zodResolver(CommentFormSchema(messages, locale)),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  const { isSubmitting } = form.formState;

  useEffect(() => {
    const savedUser = localStorage.getItem("commentUser");
    if (savedUser) {
      const { name, email } = JSON.parse(savedUser);
      form.setValue("name", name);
      form.setValue("email", email);
    }
  }, [form]);

  const onSubmit = async (values: BlogCommentForm) => {
    console.log("Here are the values", values);

    await addComment(
      postId,
      values.name.trim(),
      values.email.trim(),
      values.comment.trim(),
      parentId
    );

    localStorage.setItem("commentUser", JSON.stringify({ name: values.name, email: values.email }));

    form.reset();
    onSuccess();
  };

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="capitalize">{common("name")}</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="capitalize">{common("email")}</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} disabled={isSubmitting} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">{common("comment")}</FormLabel>
                <FormControl>
                  <Textarea {...field} disabled={isSubmitting} rows={4} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isSubmitting} className="capitalize">
            {isSubmitting ? common("posting") + "..." : isReply ? common("reply") : common("post")}
          </Button>
        </form>
      </Form>

      <Card className="bg-muted text-sm">
        <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
          <InfoIcon className="h-4 w-4 text-muted-foreground" />
          <CardTitle>
            <p className="text-sm font-medium">{t("info.title")}</p>
          </CardTitle>
        </CardHeader>
        <CardContent>{t("info.text")}</CardContent>
      </Card>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
        className="!text-xl"
      />
    </div>
  );
}
