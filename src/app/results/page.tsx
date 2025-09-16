'use client';

import { useState } from 'react';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter } from '@/components/ui/table';
import { Download, Search } from 'lucide-react';
import resultsData from '@/data/results.json';
import Footer from '@/components/layout/footer';
import { useToast } from '@/hooks/use-toast';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { appName } from '@/data/content';

const formSchema = z.object({
  studentId: z.string().min(1, { message: 'শিক্ষার্থীর আইডি দিন।' }),
  year: z.string().min(4, { message: 'পরীক্ষার বছর দিন।' }),
});

type StudentResult = {
  id: string;
  year: number;
  name: string;
  class: string;
  subjects: {
    [key: string]: number;
  };
  total: number;
  grade: string;
};

// Extend jsPDF with autoTable
interface jsPDFWithAutoTable extends jsPDF {
  autoTable: (options: any) => jsPDF;
}

export default function ResultsPage() {
  const [result, setResult] = useState<StudentResult | null>(null);
  const [notFound, setNotFound] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentId: '',
      year: new Date().getFullYear().toString(),
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const foundResult = resultsData.results.find(
      (r) => r.id === values.studentId && r.year.toString() === values.year
    );
    if (foundResult) {
      setResult(foundResult as StudentResult);
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }
  }
  
  const handleDownload = () => {
    if (!result) return;
    
    const doc = new jsPDF() as jsPDFWithAutoTable;

    // Add custom font
    // This is a placeholder for a Bengali font. For actual Bengali rendering, 
    // you would need a font that supports Bengali characters and embed it.
    // For this example, we'll proceed without custom fonts, which may not render Bengali correctly.
    
    // Header
    doc.setFontSize(18);
    doc.text(appName, 105, 20, { align: 'center' });
    doc.setFontSize(12);
    doc.text("মার্কশিট", 105, 30, { align: 'center' });

    // Student Info
    doc.setFontSize(10);
    doc.text(`শিক্ষার্থীর নাম: ${result.name}`, 14, 45);
    doc.text(`আইডি: ${result.id}`, 14, 52);
    doc.text(`শ্রেণী: ${result.class}`, 120, 45);
    doc.text(`বছর: ${result.year}`, 120, 52);

    // Create table
    const tableColumn = ["বিষয়", "নম্বর"];
    const tableRows: (string | number)[][] = [];

    Object.entries(result.subjects).forEach(([subject, marks]) => {
      const row = [subject, marks];
      tableRows.push(row);
    });

    doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 60,
        theme: 'grid',
        headStyles: { fillColor: [22, 163, 74] }, // Primary color
        // If font is correctly set up for Bengali:
        // styles: { font: 'YourBengaliFont', fontStyle: 'normal' }, 
    });

    // Footer of table
    const finalY = doc.autoTable.previous.finalY;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`মোট নম্বর: ${result.total}`, 14, finalY + 10);
    doc.text(`গ্রেড: ${result.grade}`, 14, finalY + 17);

    // Save the PDF
    doc.save(`marksheet_${result.id}.pdf`);

    toast({
        title: "ডাউনলোড শুরু হয়েছে",
        description: "মার্কশিট পিডিএফ ফাইল ডাউনলোড হচ্ছে।",
    });
  }

  return (
    <>
      <main className="flex-1 py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">
              ফলাফল অনুসন্ধান
            </h2>
            <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base text-muted-foreground">
              শিক্ষার্থীর আইডি ও পরীক্ষার বছর দিয়ে ফলাফল অনুসন্ধান করুন।
            </p>
          </div>

          <Card className="max-w-lg mx-auto shadow-lg">
            <CardHeader>
              <CardTitle>অনুসন্ধান ফরম</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="studentId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>শিক্ষার্থীর আইডি</FormLabel>
                        <FormControl>
                          <Input placeholder="12345" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="year"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>পরীক্ষার বছর</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="বছর নির্বাচন করুন" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="2024">২০২৪</SelectItem>
                            <SelectItem value="2023">২০২৩</SelectItem>
                            <SelectItem value="2022">২০২২</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    <Search className="mr-2 h-4 w-4" />
                    ফলাফল খুঁজুন
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {result && (
            <Card className="mt-8 md:mt-12 max-w-4xl mx-auto shadow-lg">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <div>
                        <CardTitle className='text-primary'>ফলাফল - {result.year}</CardTitle>
                        <CardDescription>মার্কশিট</CardDescription>
                    </div>
                    <Button onClick={handleDownload} variant="outline" size="sm" className="mt-4 sm:mt-0">
                        <Download className="mr-2 h-4 w-4" />
                        ডাউনলোড করুন
                    </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4 text-sm mb-6">
                    <p><strong>শিক্ষার্থীর নাম:</strong> {result.name}</p>
                    <p><strong>আইডি:</strong> {result.id}</p>
                    <p><strong>শ্রেণী:</strong> {result.class}</p>
                    <p><strong>গ্রেড:</strong> <span className="font-bold text-lg text-primary">{result.grade}</span></p>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>বিষয়</TableHead>
                      <TableHead className="text-right">নম্বর</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(result.subjects).map(([subject, marks]) => (
                      <TableRow key={subject}>
                        <TableCell className="font-medium">{subject}</TableCell>
                        <TableCell className="text-right">{marks}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow className="bg-secondary">
                      <TableHead>মোট নম্বর</TableHead>
                      <TableHead className="text-right font-bold text-lg">{result.total}</TableHead>
                    </TableRow>
                  </TableFooter>
                </Table>
              </CardContent>
            </Card>
          )}

          {notFound && (
             <Card className="mt-8 md:mt-12 max-w-lg mx-auto shadow-lg bg-destructive text-destructive-foreground">
                <CardHeader>
                    <CardTitle>ফলাফল পাওয়া যায়নি</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>দুঃখিত, আপনার দেওয়া তথ্যের সাথে মিলে এমন কোনো ফলাফল খুঁজে পাওয়া যায়নি। অনুগ্রহ করে সঠিক আইডি ও বছর দিয়ে আবার চেষ্টা করুন।</p>
                </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
