'use client';

import { useForm } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface FormInputs {
  name: string;
  email: string;
  phone?: string;
  message: string;
  documents?: FileList;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormInputs>();

  const onSubmit = async (/*data: FormInputs*/) => {
    // Add form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <section className="px-4 py-16">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl">Vols personalitzar les teves galetes?</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">
                Nom <span className="text-red-500">*</span>
              </Label>
              <Input id="name" {...register('name', { required: true })} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Correu electrònic <span className="text-red-500">*</span>
              </Label>
              <Input id="email" type="email" {...register('email', { required: true })} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telèfon (opcional)</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">
                Missatge <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="Explica'ns quina idea tens per a les galetes personalitzades!"
                className="min-h-[150px]"
                {...register('message', { required: true })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="documents" className="text-sm font-medium">
                Documents (opcional)
              </Label>
              <Input
                id="documents"
                type="file"
                accept="image/*"
                multiple
                className="h-full file:rounded-lg file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:text-gray-700 file:transition-colors hover:file:bg-gray-200"
              />
            </div>

            <Button type="submit" className="" disabled={isSubmitting}>
              {isSubmitting ? 'Enviant...' : 'Enviar'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
