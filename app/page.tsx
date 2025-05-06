import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Home() {
  return (
    <main className='min-h-screen p-8 flex flex-col items-center justify-center gap-12 bg-muted'>
      <h1 className='text-4xl font-bold'>Shadcn Sample</h1>

      <section className='w-full max-w-md bg-background p-6 rounded-2xl shadow'>
        <h2 className='text-2xl font-semibold mb-4'>Button</h2>
        <Button>Click me</Button>
      </section>

      <section className='w-full max-w-md bg-background p-6 rounded-2xl shadow'>
        <h2 className='text-2xl font-semibold mb-4'>Accordion</h2>
        <Accordion type='single' collapsible className='w-full'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
