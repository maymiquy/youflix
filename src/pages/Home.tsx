import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import Hero from "@/components/partials/Hero";
import {
 Card,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";

export default function Home() {
 return (
  <>
   <Hero />
   <PageHeader>
    <PageHeaderHeading>Home</PageHeaderHeading>
   </PageHeader>
   <Card>
    <CardHeader>
     <CardTitle></CardTitle>
     <CardDescription>List of Movies.</CardDescription>
    </CardHeader>
   </Card>
  </>
 );
}
