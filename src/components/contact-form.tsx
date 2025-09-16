'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'নাম কমপক্ষে ২টি অক্ষরের হতে হবে।',
  }),
  email: z.string().email({
    message: 'অনুগ্রহ করে একটি সঠিক ইমেইল দিন।',
  }),
  subject: z.string().min(5, {
    message: 'বিষয় কমপক্ষে ৫টি অক্ষরের হতে হবে।',
  }),
  message: z.string().min(10, {
    message: 'বার্তা কমপক্ষে ১০টি অক্ষরের হতে হবে।',
  }),
});

export default function ContactForm() {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "বার্তা পাঠানো হয়েছে!",
            description: "আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
        });
        form.reset();
    }

    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">আপনার বার্তা পাঠান</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>আপনার নাম</FormLabel>
                                    <FormControl>
                                        <Input placeholder="আব্দুল্লাহ আল মাহমুদ" {...field} />
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
                                    <FormLabel>আপনার ইমেইল</FormLabel>
                                    <FormControl>
                                        <Input placeholder="example@email.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>বিষয়</FormLabel>
                                    <FormControl>
                                        <Input placeholder="ভর্তি সংক্রান্ত তথ্য" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>আপনার বার্তা</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="আপনার বার্তা এখানে লিখুন..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Send className="mr-2 h-4 w-4" />
                            বার্তা পাঠান
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
